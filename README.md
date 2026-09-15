<div align="center">

# 🏀 NFLPerry NBA Assistant

### Точная база NFLPerry · Pick Helper · Maximum Potential

[![Static Site](https://img.shields.io/badge/site-static-7d99ff)](#)
[![NBA](https://img.shields.io/badge/NBA-bestSeason-ff8a2a)](#)
[![Data](https://img.shields.io/badge/data-NFLPerry%20API-73d7a8)](#)
[![No Backend](https://img.shields.io/badge/backend-not%20required-94a2b7)](#)

**Live:** https://forreveruseless.github.io/nfl_perrypeek_helper/

</div>

---

## ✨ Что это

**NFLPerry NBA Assistant** — независимый помощник для NBA Pick 'Em / SIM на NFLPerry.

Он использует snapshot ответа NFLPerry `nba-fantasy?mode=bestSeason`, показывает FPTS игроков и помогает оценивать не только текущий пик, но и **максимальный потенциальный рейтинг всего состава**.

---

## 🧠 Maximum Potential

Главная функция V7.

### До первого выбора

Сайт находит **абсолютно лучший возможный состав из 6 игроков**:

- PG
- SG
- SF
- PF
- C
- 6TH

При этом:

- позиция используется только один раз;
- одна команда используется максимум один раз;
- игрок должен подходить выбранному слоту;
- `G` может закрывать PG/SG;
- `F` может закрывать SF/PF;
- `6TH` универсален.

На текущем snapshot стартовый математический максимум составляет примерно:

```text
PG   Luka Dončić        DAL   52.9
SG   James Harden       HOU   50.2
SF   Larry Bird         BOS   45.8
PF   Giannis Antetokounmpo MIL 48.8
C    Nikola Jokić       DEN   52.5
6TH  Russell Westbrook  OKC   52.7

TOTAL: 302.9 FPTS
```

### После выбора игрока

Допустим, ты реально взял:

```text
SG — Michael Jordan — CHI — 48.5
```

Jordan фиксируется.

Дальше сайт считает:

```text
48.5
+ лучший PG из команды, которую ещё не использовали
+ лучший SF из команды, которую ещё не использовали
+ лучший PF из команды, которую ещё не использовали
+ лучший C из команды, которую ещё не использовали
+ лучший 6TH из команды, которую ещё не использовали
```

CHI уже нельзя использовать в оставшемся математическом потолке, а SG уже занят.

После каждого следующего выбранного игрока тот же расчёт повторяется.

---

## 🎯 Почему это полезно

Обычный FPTS отвечает:

> «Насколько силён этот игрок?»

Maximum Potential отвечает:

> «Какой максимальный итоговый рейтинг состава всё ещё возможен после моего выбора?»

Так можно сразу увидеть, насколько конкретный пик уменьшил общий потолок команды.

---

## 📚 База NFLPerry

В проекте используется API-структура NFLPerry с полями:

- player
- team
- position / positions
- fpts
- year
- pts
- reb
- ast
- games

Endpoint:

```text
https://api.nflperry.com/players/nba-fantasy?mode=bestSeason
```

---

## 🚀 GitHub Pages

Структура репозитория:

```text
nfl_perrypeek_helper/
├── index.html
├── README.md
├── nflperry_api_snapshot.json
└── nflperry_exporter.user.js
```

Публикация:

1. **Settings**
2. **Pages**
3. `Deploy from a branch`
4. branch `main`
5. folder `/ (root)`
6. **Save**

После этого:

```text
https://forreveruseless.github.io/nfl_perrypeek_helper/
```

---

## 🔄 Обновление базы

`nflperry_exporter.user.js` — userscript для Tampermonkey.

На NFLPerry он добавляет кнопку:

```text
Export NBA DB
```

Полученный JSON можно импортировать в Assistant.

---

## 💾 Сохранение

В `localStorage` сохраняются:

- выбранные игроки;
- занятые слоты;
- ручные поправки FPTS;
- текущий состав.

После перезагрузки страницы прогресс остаётся.

Для резервной копии можно скачать пользовательские настройки.

---

## 🛠️ Стек

- HTML
- CSS
- Vanilla JavaScript
- LocalStorage
- GitHub Pages

Без backend, npm и базы данных.

---

## ⚠️ Disclaimer

Проект не является официальным продуктом NFLPerry или NBA.

Данные принадлежат их соответствующим источникам и могут изменяться.

---

<div align="center">

### 🏀 NFLPerry NBA Assistant

**Смотри не только на текущий FPTS. Смотри, какой потолок остаётся после каждого пика.**

</div>
