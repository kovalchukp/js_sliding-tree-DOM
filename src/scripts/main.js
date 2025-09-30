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

      const value = text.nodeValue.trim();

      if (!value) {
        return;
      }
      span.textContent = value;
      text.nodeValue = '';

      li.insertBefore(span, li.firstChild);
    }
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    const li = e.target.closest('li');

    if (!li) {
      return;
    }

    const childUl = li.querySelector(':scope > ul');

    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }
  });
});
