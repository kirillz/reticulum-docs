# rnodeconf

**rnodeconf** — утилита для инспекции и настройки существующих RNodes, а также для создания и provisioning новых RNodes из любых поддерживаемых аппаратных устройств.

---

## Примеры использования

**Показать информацию об устройстве:**

```bash
$ rnodeconf -i /dev/ttyUSB0
```

**Показать конфигурацию устройства:**

```bash
$ rnodeconf -c /dev/ttyUSB0
```

**Автоматическая установка прошивки:**

```bash
$ rnodeconf -a /dev/ttyUSB0
```

**Обновить прошивку до последней версии:**

```bash
$ rnodeconf -u /dev/ttyUSB0
```

**Обновить прошивку, даже если версия совпадает:**

```bash
$ rnodeconf -U /dev/ttyUSB0
```

**Использовать конкретную версию прошивки:**

```bash
$ rnodeconf -u --fw-version 1.2.3 /dev/ttyUSB0
```

**Извлечь прошивку из устройства:**

```bash
$ rnodeconf -e /dev/ttyUSB0
```

**Переключить устройство в режим TNC:**

```bash
$ rnodeconf -T /dev/ttyUSB0
```

**Настроить параметры TNC:**

```bash
$ rnodeconf -T --freq 868000000 --bw 125000 --txp 14 --sf 7 --cr 5 /dev/ttyUSB0
```

**Включить Bluetooth:**

```bash
$ rnodeconf -b /dev/ttyUSB0
```

**Перевести в режим сопряжения Bluetooth:**

```bash
$ rnodeconf -p /dev/ttyUSB0
```

**Настроить дисплей:**

```bash
$ rnodeconf -D 128 -t 30 -R 1 /dev/ttyUSB0
```

**Резервное копирование EEPROM:**

```bash
$ rnodeconf --eeprom-backup /dev/ttyUSB0
```

**Очистить EEPROM:**

```bash
$ rnodeconf --eeprom-wipe /dev/ttyUSB0
```

**Сгенерировать новый ключ подписи:**

```bash
$ rnodeconf -k
```

**Прошить устройство с bootstrap:**

```bash
$ rnodeconf -f /dev/ttyUSB0
```

---

## Все опции командной строки

```
usage: rnodeconf [-h] [-i] [-a] [-u] [-U] [--fw-version version]
                 [--fw-url url] [--nocheck] [-e] [-E] [-C]
                 [--baud-flash baud_flash] [-N] [-T] [-b] [-B] [-p] [-D i]
                 [--display-addr byte] [--freq Hz] [--bw Hz] [--txp dBm]
                 [--sf factor] [--cr rate] [--eeprom-backup] [--eeprom-dump]
                 [--eeprom-wipe] [-P] [--trust-key hexbytes] [--version] [-f]
                 [-r] [-k] [-S] [-H FIRMWARE_HASH] [--platform platform]
                 [--product product] [--model model] [--hwrev revision]
                 [port]

Утилита настройки и прошивки RNode. Эта программа позволяет изменять
различные настройки и режимы запуска RNode. Она также может устанавливать,
прошивать и обновлять прошивку на поддерживаемых устройствах.

Позиционные аргументы:
  port                  последовательный порт, к которому подключён RNode

Опции:
  -h, --help            показать эту справку и выйти
  -i, --info            показать информацию об устройстве
  -a, --autoinstall     автоматическая установка на различные поддерживаемые устройства
  -u, --update          обновить прошивку до последней версии
  -U, --force-update    обновить до указанной прошивки, даже если версия совпадает или старше установленной
  --fw-version version  использовать конкретную версию прошивки для обновления или автоустановки
  --fw-url url          использовать альтернативный URL для загрузки прошивки
  --nocheck             не проверять обновления прошивки онлайн
  -e, --extract         извлечь прошивку из подключённого RNode для последующего использования
  -E, --use-extracted   использовать извлечённую прошивку для автоустановки или обновления
  -C, --clear-cache     очистить локально кэшированные файлы прошивки
  --baud-flash baud_flash
                        установить конкретную скорость передачи при прошивке устройства. По умолчанию 921600
  -N, --normal          переключить устройство в нормальный режим
  -T, --tnc             переключить устройство в режим TNC
  -b, --bluetooth-on    включить Bluetooth на устройстве
  -B, --bluetooth-off   выключить Bluetooth на устройстве
  -p, --bluetooth-pair  перевести устройство в режим сопряжения Bluetooth
  -D, --display i       установить интенсивность дисплея (0-255)
  -t, --timeout s       установить таймаут дисплея в секундах, 0 для отключения
  -R, --rotation rotation
                        установить поворот дисплея, допустимые значения от 0 до 3
  --display-addr byte   установить адрес дисплея как hex байт (00 - FF)
  --recondition-display запустить восстановление дисплея
  --np i                установить интенсивность NeoPixel (0-255)
  --freq Hz             частота в Гц для режима TNC
  --bw Hz               полоса пропускания в Гц для режима TNC
  --txp dBm             мощность передачи в дБм для режима TNC
  --sf factor           фактор расширения для режима TNC (7 - 12)
  --cr rate             кодовая скорость для режима TNC (5 - 8)
  -x, --ia-enable       включить избегание интерференции
  -X, --ia-disable      выключить избегание интерференции
  -c, --config          показать конфигурацию устройства
  --eeprom-backup       резервное копирование EEPROM в файл
  --eeprom-dump         вывод содержимого EEPROM в консоль
  --eeprom-wipe         разблокировать и очистить EEPROM
  -P, --public          отобразить публичную часть ключа подписи
  --trust-key hexbytes  публичный ключ для доверия при верификации устройства
  --version             показать версию программы и выйти
  -f, --flash           прошить прошивку и bootstrap EEPROM
  -r, --rom             bootstrap EEPROM без прошивки прошивки
  -k, --key             сгенерировать новый ключ подписи и выйти
  -S, --sign            отобразить публичную часть ключа подписи
  -H, --firmware-hash FIRMWARE_HASH
                        установить хэш установленной прошивки
  --platform platform   спецификация платформы для bootstrap устройства
  --product product     спецификация продукта для bootstrap устройства
  --model model         код модели для bootstrap устройства
  --hwrev revision      ревизия оборудования для bootstrap устройства
```

---

## См. также

- [**Основы RNS**](../index.md) — введение в протокол Reticulum
- [**Утилиты RNS**](index.md) — обзор всех утилит командной строки
