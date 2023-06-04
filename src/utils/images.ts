const load = async function () {
  let images: Record<string, () => Promise<unknown>> | undefined = undefined;
  try {
    images = import.meta.glob('~/assets/images/**');
  } catch (e) {
    // continue regardless of error
  }
  return images;
};

let _images: Promise<Record<string, () => Promise<unknown>> | undefined>;

/** */
export const fetchLocalImages = async () => {
  _images = _images || load();
  return await _images;
};

/** */
export const findImage = async (imagePath?: string) => {
  if (typeof imagePath !== 'string') {
    return null;
  }

  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('/')) {
    return imagePath;
  }

  if (!imagePath.startsWith('~/assets')) {
    return null;
  } // For now only consume images using ~/assets alias (or absolute)

  const images = await fetchLocalImages();
  const key = imagePath.replace('~/', '/src/');

  if (images !== undefined && typeof images[key] === 'function') {
    let glob_obj = await images[key]();
    if (glob_obj !== undefined && glob_obj !== null) {
      return glob_obj['default'];
    }
  }

  return null;
};
