# Тестовый проект для компании Киберия
Страница списков проекта компании. Имеется форма обратной связи.

## Запуск и сборка проекта
Должны быть установлены `npm` и `node`  
Для запуска в режиме разработки:
```
npm install
npm run dev
```
Для сборки проекта:
```
npm install
npm run build
```

## Реализация
В проекте используются `Eslint` и `Prettier` для линтинга и форматирования кода.  
Проект реализован с применением фреймворка `Vue.js`, для хранения данных используется `Pinia`.  
Стилизация выполнена в отделённых от компонентов файлах по методолгоии БЭМ, используется препроцессор `SCSS`.  

## Основные компоненты
`Header` отвечает за шапку сайта  
![image](https://github.com/user-attachments/assets/812cebca-926d-4e0c-8bd8-c5e0757071f0)  
![image](https://github.com/user-attachments/assets/0d970d0e-6b7f-4ada-b3b2-42ce81d4fecf)  

`Breacrumbs` показывает текущий путь на сайте  
![image](https://github.com/user-attachments/assets/a2557837-4ed7-40cb-9d23-b057f90aecb5)  

`Cases` показывает карточки проектов  
![image](https://github.com/user-attachments/assets/c19889e4-52e9-4037-b074-98872c2c5271)  
![image](https://github.com/user-attachments/assets/b3d4d38f-07bf-4802-9861-8e8dd8c2cef3)  

`FeedbackForm` служит для обратной связи
![image](https://github.com/user-attachments/assets/e1c728f3-a6db-45a8-a6c6-af36e15ef207)  
![image](https://github.com/user-attachments/assets/2b903df7-be3e-4a53-a8d6-48d478868169)  

`Footer` является подвалом сайта  
![image](https://github.com/user-attachments/assets/ebff75dd-2d89-4dc2-aa27-1869c77d04ad)  
![image](https://github.com/user-attachments/assets/67bc6d3c-4a82-4c87-aeb9-b80c9d8a9944)  

Все компоненты адаптивны по размеру экрана.
