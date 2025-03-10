(function() {
    'use strict';

    // Função que tenta remover o elemento específico
    function removeVideoUserComponent() {
        const element = document.querySelector('#video-user-component');
        if (element) {
            element.remove();
            console.log("Elemento 'video-user-component' removido com sucesso!");
        } else {
            console.error("Elemento 'video-user-component' não encontrado.");
        }
    }

    // Remover o elemento logo que a página é carregada
    window.addEventListener('load', () => {
        removeVideoUserComponent();
    });

    // Usar o MutationObserver para detectar quando o componente é adicionado dinamicamente
    const observer = new MutationObserver(() => {
        removeVideoUserComponent();
    });

    // Observar mudanças no corpo da página
    observer.observe(document.body, { childList: true, subtree: true });

    // Tentar remover o componente caso ele já tenha sido carregado
    removeVideoUserComponent();
})();
