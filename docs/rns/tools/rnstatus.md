# rnstatus

**rnstatus** — утилита для просмотра статуса настроенных интерфейсов Reticulum. Аналогична программе `ifconfig` в традиционных сетях Linux систем.

---

## Примеры использования

**Запуск rnstatus:**

```bash
$ rnstatus

Shared Instance[37428]
   Status  : Up
   Serving : 1 program
   Rate    : 1.00 Gbps
   Traffic : 83.13 KB↑
             86.10 KB↓

AutoInterface[Local]
   Status  : Up
   Mode    : Full
   Rate    : 10.00 Mbps
   Peers   : 1 reachable
   Traffic : 63.23 KB↑
             80.17 KB↓

TCPInterface[RNS Testnet Dublin/dublin.connect.reticulum.network:4965]
   Status  : Up
   Mode    : Full
   Rate    : 10.00 Mbps
   Traffic : 187.27 KB↑
             74.17 KB↓

RNodeInterface[RNode UHF]
   Status  : Up
   Mode    : Access Point
   Rate    : 1.30 kbps
   Access  : 64-bit IFAC by <…e702c42ba8>
   Traffic : 8.49 KB↑
             9.23 KB↓

Reticulum Transport Instance <5245a8efe1788c6a1cd36144a270e13b> running
```

**Можно фильтровать вывод по имени интерфейса:**

```bash
$ rnstatus rnode

RNodeInterface[RNode UHF]
   Status  : Up
   Mode    : Access Point
   Rate    : 1.30 kbps
   Access  : 64-bit IFAC by <…e702c42ba8>
   Traffic : 8.49 KB↑
             9.23 KB↓

Reticulum Transport Instance <5245a8efe1788c6a1cd36144a270e13b> running
```

---

## Все опции командной строки (переведены для понимания)

```
usage: rnstatus [-h] [--config CONFIG] [--version] [-a] [-A]
                [-l] [-t] [-s SORT] [-r] [-j] [-R hash] [-i path]
                [-w seconds] [-d] [-D] [-m] [-I seconds] [-v] [filter]

Утилита просмотра статуса Reticulum Network Stack

positional arguments:
  filter                показывать только интерфейсы, содержащие filter в имени

options:
  -h, --help            показать эту справку и выйти
  --config CONFIG       путь к альтернативному каталогу конфигурации Reticulum
  --version             показать номер версии программы и выйти
  -a, --all             показать все интерфейсы
  -A, --announce-stats  показать статистику объявлений (announces)
  -l, --link-stats      показать статистику соединений (links)
  -t, --totals          показать общий трафик
  -s, --sort SORT       сортировать интерфейсы по [rate, traffic, rx, tx, rxs, txs,
                                            announces, arx, atx, held]
  -r, --reverse         обратный порядок сортировки
  -j, --json            вывод в формате JSON
  -R hash               хэш транспортной идентичности удалённого экземпляра для запроса статуса
  -i path               путь к файлу идентичности для удалённого управления
  -w seconds            таймаут ожидания ответа от удалённых запросов
  -d, --discovered      показать обнаруженные интерфейсы
  -D                    показать детали и записи конфигурации для обнаруженных интерфейсов
  -m, --monitor         непрерывный мониторинг статуса
  -I, --monitor-interval seconds
                        интервал обновления в режиме мониторинга (по умолчанию: 1)
  -v, --verbose         подробный вывод
```

---

## Примечание

При использовании опции `-R` для запроса статуса удалённого транспортного экземпляра необходимо также указать `-i` с путём к файлу идентичности, авторизованному для удалённого управления на целевой системе.

---

## См. также

- [**Основы RNS**](../index.md) — введение в протокол Reticulum
- [**Утилиты RNS**](index.md) — обзор всех утилит командной строки
- [**rnsd**](rnsd.md) — демон Reticulum
