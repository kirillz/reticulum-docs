# rnid

**rnid** — утилита для генерации, управления и просмотра идентичностей (Identities) Reticulum. Программа также позволяет вычислять хэши назначений (Destination hashes) и выполнять шифрование и дешифрование файлов.

С помощью `rnid` можно асимметрично шифровать файлы и информацию для любого хэша назначения Reticulum, а также создавать и проверять криптографические подписи.

---

## Примеры использования

**Генерация новой идентичности:**

```bash
$ rnid -g ./new_identity
```

**Отображение информации о ключах идентичности:**

```bash
$ rnid -i ./new_identity -p

Loaded Identity <984b74a3f768bef236af4371e6f248cd> from new_id
Public Key  : 0f4259fef4521ab75a3409e353fe9073eb10783b4912a6a9937c57bf44a62c1e
Private Key : Hidden
```

**Шифрование файла для пользователя LXMF:**

```bash
$ rnid -i 8dd57a738226809646089335a6b03695 -e my_file.txt

Recalled Identity <bc7291552be7a58f361522990465165c> for destination <8dd57a738226809646089335a6b03695>
Encrypting my_file.txt
File my_file.txt encrypted for <bc7291552be7a58f361522990465165c> to my_file.txt.rfe
```

**Если идентичность для назначения ещё не известна, её можно получить из сети с помощью опции `-R`:**

```bash
$ rnid -R -i 30602def3b3506a28ed33db6f60cc6c9 -e my_file.txt

Requesting unknown Identity for <30602def3b3506a28ed33db6f60cc6c9>...
Received Identity <2b489d06eaf7c543808c76a5332a447d> for destination <30602def3b3506a28ed33db6f60cc6c9> from the network
Encrypting my_file.txt
File my_file.txt encrypted for <2b489d06eaf7c543808c76a5332a447d> to my_file.txt.rfe
```

**Дешифрование файла с использованием идентичности Reticulum, для которой он был зашифрован:**

```bash
$ rnid -i ./my_identity -d my_file.txt.rfe

Loaded Identity <2225fdeecaf6e2db4556c3c2d7637294> from ./my_identity
Decrypting ./my_file.txt.rfe...
File ./my_file.txt.rfe decrypted with <2225fdeecaf6e2db4556c3c2d7637294> to ./my_file.txt
```

---

## Все опции командной строки (переведены для понимания)

```
usage: rnid.py [-h] [--config path] [-i identity] [-g path] [-v] [-q] [-a aspects]
               [-H aspects] [-e path] [-d path] [-s path] [-V path] [-r path] [-w path]
               [-f] [-R] [-t seconds] [-p] [-P] [--version]

Утилита идентичностей и шифрования Reticulum

options:
  -h, --help            показать эту справку и выйти
  --config path         путь к альтернативному каталогу конфигурации Reticulum
  -i, --identity identity
                        шестнадцатеричная идентичность Reticulum или хэш назначения,
                        или путь к файлу идентичности
  -g, --generate file   сгенерировать новую идентичность
  -m, --import identity_data
                        импортировать идентичность Reticulum в формате hex, base32 или base64
  -x, --export          экспортировать идентичность в формате hex, base32 или base64
  -v, --verbose         увеличить подробность вывода
  -q, --quiet           уменьшить подробность вывода
  -a, --announce aspects
                        объявить назначение на основе этой идентичности
  -H, --hash aspects    показать хэши назначений для других аспектов этой идентичности
  -e, --encrypt file    зашифровать файл
  -d, --decrypt file    дешифровать файл
  -s, --sign path       подписать файл
  -V, --validate path   проверить подпись
  -r, --read file       путь к входному файлу
  -w, --write file      путь к выходному файлу
  -f, --force           записать вывод, даже если он перезапишет существующие файлы
  -R, --request         запросить неизвестные идентичности из сети
  -t seconds            таймаут запроса идентичности перед отказом
  -p, --print-identity  вывести информацию об идентичности и выйти
  -P, --print-private   разрешить отображение приватных ключей
  -b, --base64          использовать кодирование base64 для ввода и вывода
  -B, --base32          использовать кодирование base32 для ввода и вывода
  --version             показать номер версии программы и выйти
```

---

## См. также

- [**Основы RNS**](../index.md) — введение в протокол Reticulum
- [**Утилиты RNS**](index.md) — обзор всех утилит командной строки
- [**rncp**](rncp.md) — копирование файлов через сеть Reticulum
- [**rnx**](rnx.md) — удалённое выполнение команд
