const targetNode = document.body;

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    const newNodes = [...mutation.addedNodes].filter(
      (n) => n.nodeType === Node.TEXT_NODE
    );

    if (newNodes.length) {
      for (let i = 0; i < newNodes.length; i++) {
        const node = newNodes[i];

        const textContent = node.textContent;
        const arabic = /[\u0600-\u06FF]/;

        if (textContent && arabic.test(textContent)) {
          node.parentNode.setAttribute("dir", "rtl");
        }
      }
    }
  });
});

observer.observe(targetNode, {
  childList: true,
  subtree: true,
});
