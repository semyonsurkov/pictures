export const imagesSize = (imgSelector: string): void => {
  const blocks = document.querySelectorAll(imgSelector);

  function showImg(block: Element): void {
    const img = block.querySelector('img') as HTMLImageElement;
    img.src = img.src.slice(0, -4) + '-1.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach((p: Element) => {
      (p as HTMLElement).style.display = 'none';
    });
  }

  function hideImg(block: Element): void {
    const img = block.querySelector('img') as HTMLImageElement;
    img.src = img.src.slice(0, -6) + '.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach((p: Element) => {
      (p as HTMLElement).style.display = 'block';
    });
  }

  blocks.forEach((block: Element) => {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });
  });
};
