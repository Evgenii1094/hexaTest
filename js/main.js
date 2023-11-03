window.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelectorAll('.faq__wrapper'),
          question = document.querySelectorAll('.faq__question'),
          answer = document.querySelectorAll('.faq__answer');

    function accordion(wrapperBlock, questionBlock, answerBlock) {
        questionBlock.forEach((item, i) => {
            item.addEventListener('click', () => {
                if (wrapperBlock[i].classList.contains('is-open')) {
                    wrapperBlock[i].classList.remove('is-open');
                    answerBlock[i].style.maxHeight = '0';
                } else {
                    wrapperBlock.forEach((item, i) => {
                        if (item.classList.contains('is-open')) {
                            item.classList.remove('is-open');
                            answerBlock[i].style.maxHeight = '0';
                        }
                    });
                    wrapperBlock[i].classList.add('is-open');
                    answerBlock[i].style.maxHeight = answerBlock[i].scrollHeight + 'px';
                }
            });
        });
    }

    accordion(wrapper, question, answer);
});