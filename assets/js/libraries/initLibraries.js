import initAOS from './aos.js';
import initSmoothScroll from './smoothScroll.js';
import initTypedTexts from './typed.js';

initAOS(1800); // 1000 === 1 segundo
initSmoothScroll(0, 2000);

// ! Se não utilizar a library typed, deixe comentada para não gerar erros. Se quiser usar apenas descomente a linha abaixo e configure da maneira que quiser
// initTypedTexts(['one', 'two', 'tree'], 300, 300, 400);
