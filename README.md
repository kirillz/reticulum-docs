# Документация Reticulum

Документация для Reticulum Network Stack, написанная на русском языке с использованием MkDocs и темы Material.
Формат документации в основном [Markdown](https://www.markdownguide.org/getting-started/)

## Установка для разработки

### Требования

- Python 3.8 или выше
- pip или pipx (менеджер пакетов Python)
- Git

### Шаги установки

1. **Клонируйте репозиторий:**

   ```bash
   git clone https://github.com/kirillz/reticulum-docs.git
   cd reticulum-docs
   ```

2. **Создайте виртуальное окружение (рекомендуется):**

   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/macOS
   # или
   venv\Scripts\activate     # Windows
   ```

3. **Установите зависимости:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Запустите локальный сервер разработки:**

   ```bash
   mkdocs serve
   ```

   Документация будет доступна по адресу: http://127.0.0.1:8000

   Сервер автоматически обновляет страницу при изменении файлов документации.

5. **Сборка статической версии сайта:**

   ```bash
   mkdocs build
   ```

   Результат будет собран в папке `site/`.

## Структура папок документации

```
reticulum-docs/
├── docs/                       # Исходные файлы документации
│   ├── index.md                # Главная страница
│   ├── css/
│   │   └── custom.css          # Кастомные стили
│   ├── rns/                    # Документация Reticulum Network Stack
│   │   ├── index.md            # Основы RNS
│   │   └── tools/              # Утилиты RNS
│   │       ├── index.md        # Обзор утилит
│   │       ├── rnsd.md         # Демон RNS
│   │       ├── rnstatus.md     # Статус
│   │       ├── rnid.md         # Идентификаторы
│   │       ├── rnpath.md       # Маршруты
│   │       ├── rnprobe.md      # Диагностика
│   │       ├── rncp.md         # Копирование файлов
│   │       ├── rnx.md          # Удаленное выполнение
│   │       └── rnodeconf.md    # Конфигурация RNode
│   ├── lxmf/                   # Документация LXMF
│   │   ├── index.md            # Основы LXMF
│   │   └── tools/              # Утилиты LXMF
│   │       └── index.md        # Обзор утилит LXMF
│   │           └── lxmd.md     # Узел распространения LXMF
│   └── nomadnet/               # Документация Nomad Network
│       └── index.md            # Основы Nomad Network
├── .githooks/                  # Git-хуки
│   └── commit-msg              # Хук для проверки сообщений коммитов
├── .github/
│   └── workflows/
│       └── ci.yml              # Конфигурация CI/CD
├── mkdocs.yml                  # Конфигурация MkDocs
├── requirements.txt            # Зависимости Python
└── README.md                   # Этот файл
```

## Описание разделов

- **RNS (Reticulum Network Stack)** — базовая документация по стеку протоколов Reticulum, включая описание утилит командной строки.
- **LXMF** — документация по протоколу обменов сообщениями на базе RNS.
- **Nomad Network** — документация по децентрализованной mesh-сети.

## 🤝 Вклад в проект

0. Загляните в Текущие задачи по проекту и выберите себе [задачу](https://github.com/kirillz/reticulum-docs/issues)
1. Создайте новую ветку для ваших изменений. 
2. Внесите изменения в файлы документации в папке `docs/`.
3. Проверьте отображение локально с помощью `mkdocs serve`.
4. Создайте pull request.

## Лицензия

Проект распространяется под лицензией GPLv3.
