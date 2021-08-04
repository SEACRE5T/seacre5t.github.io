import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './ProjectResults.scss';

const results = [
  {text: 'Полноценно функционирующий и адаптивный интернет-магазин, для привлечения клиентов'},
  {text: 'Большие и яркие кнопки для навигации и переключений'},
  {text: 'Гибкость настроек и фильтров продукции'},
  {text: 'Оплата товаров и подтверждение через почту'},
  {text: 'Возможность отследить наличие товара. Фокус на выбранных параметрах товара'},
  {text: 'Оптимизация манипуляций с корзиной'},
]

const ProjectResults = () => {
  const [count, setCount] = useState(0);
  const render = results.map((e, index) => <p className='results__par' key={index}>{e.text}</p>)


  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [count < 8]);

  return (
    <div className='results__container'>
      <Header text='Итоги проекта' />
      <div className="underline" />
      <div className='results__content'>
        {render.slice(0, count)}
      </div>
    </div>
  );
};

export default ProjectResults;



