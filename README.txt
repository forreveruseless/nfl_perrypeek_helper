NFLPerry NBA Assistant V5

Что найдено в HAR:
- endpoint: https://api.nflperry.com/players/nba-fantasy?mode=bestSeason
- строк в API snapshot: 2795
- строк для 30 активных команд (без SEA): 2737
- GSW: 115 игроков
- SEA: 58 исторических строк

Главное:
Поле fpts уже приходит готовым с NFLPerry. Вручную собирать рейтинги не нужно.

Файлы:
1) index.html
   Локальный сайт с точным snapshot, поиском и помощником по пикам.

2) nflperry_exporter.user.js
   Tampermonkey userscript. На любой странице nflperry.com добавляет кнопку
   "Export NBA DB". Нажатие скачивает свежий JSON с API. Этот JSON можно
   импортировать в V5.

Почему нужен userscript:
API отвечает CORS только для origin nflperry.com, поэтому локальный HTML-файл
не может сам обновляться напрямую с API.

Сохранность:
- ручные поправки и текущий состав сохраняются в localStorage;
- V5 пытается перенести ручные рейтинги из V4/V3 как overrides;
- можно скачать state JSON и текущую API-базу.
