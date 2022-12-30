# QA: Array reverse

Напишить тести для функції `arrayReverse`, яка приймає масив рядків `words`, що складається з латинських літер, цифр та спеціальних символів.

Функція перевертає рядки в масиві і їх порядок так, щоб довжина рядків з оригінального масиву не змінється, тобто якщо довжина першого рядка дорівнює 1, а останнього - 5, то при повороті першим рядком в масиві буде тільки останній символ з останнього рядка.

Приклади:

```js
arrayReverse(['Hello']) === ['olleH']
arrayReverse(['Mate', 'Academy']) === ['ymed', 'acAetaM']
arrayReverse(['I', 'am', 'a', 'student!']) === ['!', 'tn', 'e', 'dutsamaI']
```

---

- [Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md);
- Read more about [Jest expectations](https://jestjs.io/uk/docs/expect).
