
import { validateForms } from './../functions/validate-forms';
import { quizImagesSlider, quizSlider } from './sliders';
const rules1 = [{
  ruleSelector: '.form-name',
  rules: [
    {
      rule: 'minLength',
      value: 3
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Заполните имя!'
    }
  ]
},
{
  ruleSelector: '.form-tel',
  tel: true,
  telError: 'Введите корректный телефон',
  rules: [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Заполните телефон!'
    }
  ]
}]
const rules2 = [{
  ruleSelector: '.form-name',
  rules: [
    {
      rule: 'minLength',
      value: 3
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Заполните имя!'
    }
  ]
},
{
  ruleSelector: '.form-tel',
  tel: true,
  telError: 'Введите корректный телефон',
  rules: [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Заполните телефон!'
    }
  ]
}]

const afterForm1 = () => {
  console.log('Ваша заявка была отправлена!');
};

const afterForm2 = () => {
  quizSlider.slideTo(0)
  quizImagesSlider.slideTo(1)
};

validateForms('[data-modal]', rules1, afterForm1);
validateForms('.quiz__form', rules2, afterForm2);
