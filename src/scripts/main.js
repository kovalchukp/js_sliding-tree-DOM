'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  tree.querySelectorAll('li').forEach((li) => {
    const text = li.firstChild;

    if (text && text.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');

      span.textContent = text.textContent.trim();
      li.insertBefore(span, text);
      li.removeChild(text);
    }
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    const li = e.target.closest('li');
    const childUl = li.querySelector('ul');

    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }
  });
});
