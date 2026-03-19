# Конфигурирование интерфейсов

В этом руководстве описаны все типы интерфейсов, доступные в Reticulum, и приведены примеры их конфигурации. Вы можете настроить любое количество интерфейсов, и Reticulum будет использовать их все для построения ячеистой сети.

---

## Общие параметры интерфейсов

Все интерфейсы поддерживают следующий набор общих параметров:

| Параметр         | Описание                                                                         |
| ---------------- | -------------------------------------------------------------------------------- |
| `type`           | Тип интерфейса (обязательно)                                                     |
| `enabled`        | Включить интерфейс (`yes`/`no`)                                                  |
| `mode`           | Режим работы: `full`, `gateway`/`gw`, `access_point`/`ap`, `roaming`, `boundary` |
| `outgoing`       | Разрешить исходящий трафик (`yes`/`no`)                                          |
| `network_name`   | Имя виртуальной сети для подключения к конкретным пирам                          |
| `passphrase`     | Пароль для аутентификации в сети                                                 |
| `ifac_size`      | Размер IFAC (Interface Authentication and Cryptography) в битах (8-512)          |
| `announce_cap`   | Лимит пропускной способности для анонсов (1-100%, по умолчанию 2%)               |
| `bitrate`        | declared скорость интерфейса в битах в секунду                                   |
| `bootstrap_only` | Временный мост только для начального подключения (`yes`/`no`)                    |

### Режимы работы интерфейсов

| Режим               | Описание                                                    |
| ------------------- | ----------------------------------------------------------- |
| `full`              | Полный функционал (режим по умолчанию)                      |
| `gateway`/`gw`      | Шлюз — позволяет клиентам обнаруживать пути через этот узел |
| `access_point`/`ap` | Точка доступа — тихий режим, не распространяет пути         |
| `roaming`           | Для мобильных узлов с изменяющейся топологией               |
| `boundary`          | Граничный интерфейс для подключения к другим сегментам сети |

---

## AutoInterface

**AutoInterface** автоматически обнаруживает другие узлы Reticulum в локальной сети через IPv6 multicast и UDP.

### Параметры

| Параметр                 | Описание                                   | Значение по умолчанию |
| ------------------------ | ------------------------------------------ | --------------------- |
| `group_id`               | Идентификатор группы для обнаружения       | `reticulum`           |
| `multicast_address_type` | Тип multicast-адреса                       | `temporary`           |
| `devices`                | Список сетевых устройств для использования | Все доступные         |
| `ignored_devices`        | Список игнорируемых устройств              | —                     |
| `discovery_scope`        | Область обнаружения                        | `link`                |
| `discovery_port`         | Порт для обнаружения                       | 4243                  |
| `data_port`              | Порт для данных                            | 4244                  |

### Пример конфигурации

```ini
[interfaces]
[[Default Interface]]
type = AutoInterface
enabled = yes
group_id = reticulum
devices = wlan0,eth1
discovery_scope = link
```

---

## BackboneInterface

**BackboneInterface** — высокопроизводительный интерфейс для соединения экземпляров Reticulum через TCP/IPv4/IPv6. Доступен на Linux и Android.

### Параметры

| Параметр                     | Описание                                      |
| ---------------------------- | --------------------------------------------- |
| `listen_on`                  | IP-адрес для прослушивания (0.0.0.0 для всех) |
| `port`                       | Порт для прослушивания                        |
| `device`                     | Сетевое устройство                            |
| `prefer_ipv6`                | Приоритет IPv6 над IPv4 (`yes`/`no`)          |
| `remote`                     | Удалённый хост для подключения                |
| `target_host`, `target_port` | Целевой хост и порт                           |

### Пример: Слушатель

```ini
[interfaces]
[[Backbone Listener]]
type = BackboneInterface
enabled = yes
listen_on = 0.0.0.0
port = 4242
```

### Пример: Подключение к удалённому узлу

```ini
[interfaces]
[[Backbone Remote]]
type = BackboneInterface
enabled = yes
remote = amsterdam.connect.reticulum.network
target_port = 4251
```

---

## TCPServerInterface

**TCPServerInterface** создаёт TCP-сервер для подключения других пиров через IPv4/IPv6.

### Параметры

| Параметр       | Описание                              |
| -------------- | ------------------------------------- |
| `listen_ip`    | IP-адрес для прослушивания            |
| `listen_port`  | Порт для прослушивания                |
| `device`       | Сетевое устройство                    |
| `prefer_ipv6`  | Приоритет IPv6 (`yes`/`no`)           |
| `i2p_tunneled` | Туннелирование через I2P (`yes`/`no`) |

### Пример конфигурации

```ini
[interfaces]
[[TCP Server Interface]]
type = TCPServerInterface
enabled = yes
listen_ip = 0.0.0.0
listen_port = 4242
```

---

## TCPClientInterface

**TCPClientInterface** подключается к удалённому TCP-серверу.

### Параметры

| Параметр       | Описание                                |
| -------------- | --------------------------------------- |
| `target_host`  | Целевой хост (hostname или IP)          |
| `target_port`  | Целевой порт                            |
| `kiss_framing` | Использовать KISS-фрейминг (`yes`/`no`) |
| `fixed_mtu`    | Фиксированный MTU                       |
| `i2p_tunneled` | Туннелирование через I2P (`yes`/`no`)   |

### Пример конфигурации

```ini
[interfaces]
[[TCP Client Interface]]
type = TCPClientInterface
enabled = yes
target_host = 127.0.0.1
target_port = 4242
```

---

## UDPInterface

**UDPInterface** обеспечивает общение через UDP с поддержкой broadcast.

### Параметры

| Параметр       | Описание                                    |
| -------------- | ------------------------------------------- |
| `listen_ip`    | IP-адрес для прослушивания                  |
| `listen_port`  | Порт для прослушивания                      |
| `forward_ip`   | Адрес для пересылки (broadcast или unicast) |
| `forward_port` | Порт для пересылки                          |
| `device`       | Сетевое устройство                          |

### Пример конфигурации

```ini
[interfaces]
[[UDP Interface]]
type = UDPInterface
enabled = yes
listen_ip = 0.0.0.0
listen_port = 4242
forward_ip = 255.255.255.255
forward_port = 4242
```

---

## I2PInterface

**I2PInterface** подключается через анонимную сеть I2P.

### Параметры

| Параметр      | Описание                                    |
| ------------- | ------------------------------------------- |
| `connectable` | Разрешить входящие подключения (`yes`/`no`) |
| `peers`       | Список I2P b32-адресов пиров                |

### Пример конфигурации

```ini
[interfaces]
[[I2P]]
type = I2PInterface
enabled = yes
connectable = yes
peers = 5urvjicpzi7q3ybztsef4i5ow2aq4soktfj7zedz53s47r54jnqq.b32.i2p
```

---

## RNodeInterface

**RNodeInterface** для работы с LoRa-трансиверами RNode.

### Параметры

| Параметр              | Описание                                                         |
| --------------------- | ---------------------------------------------------------------- |
| `port`                | Последовательный порт (`/dev/ttyUSB0`, `tcp://...`, `ble://...`) |
| `frequency`           | Частота в Гц                                                     |
| `bandwidth`           | Полоса пропускания в Гц                                          |
| `txpower`             | Мощность передачи в дБм                                          |
| `spreadingfactor`     | Фактор расширения (7-12)                                         |
| `codingrate`          | Скорость кодирования (5-8)                                       |
| `id_callsign`         | Позывной станции для идентификации                               |
| `id_interval`         | Интервал идентификации (секунды)                                 |
| `airtime_limit_long`  | Лимит эфирного времени для длинных пакетов (%)                   |
| `airtime_limit_short` | Лимит эфирного времени для коротких пакетов (%)                  |

### Пример конфигурации

```ini
[interfaces]
[[RNode LoRa Interface]]
type = RNodeInterface
enabled = yes
port = /dev/ttyUSB0
frequency = 867200000
bandwidth = 125000
txpower = 7
spreadingfactor = 8
codingrate = 5
id_callsign = RNODE01
id_interval = 10
```

---

## RNodeMultiInterface

**RNodeMultiInterface** для RNode с несколькими LoRa-трансиверами.

### Пример конфигурации

```ini
[interfaces]
[[RNode Multi Interface]]
type = RNodeMultiInterface
enabled = yes
port = /dev/ttyACM0

[[[High Datarate]]]
enabled = yes
frequency = 2400000000
bandwidth = 1625000
vport = 1
spreadingfactor = 5

[[[Long Range]]]
enabled = yes
frequency = 868000000
bandwidth = 125000
vport = 2
spreadingfactor = 10
```

---

## SerialInterface

**SerialInterface** для прямого соединения через последовательный порт.

### Параметры

| Параметр   | Описание                                          |
| ---------- | ------------------------------------------------- |
| `port`     | Устройство (`/dev/ttyUSB0`, `COM1`, и т.д.)       |
| `speed`    | Скорость в битах в секунду                        |
| `databits` | Количество бит данных (5-8)                       |
| `parity`   | Чётность (`NONE`, `EVEN`, `ODD`, `MARK`, `SPACE`) |
| `stopbits` | Стоповые биты (1, 1.5, 2)                         |

### Пример конфигурации

```ini
[interfaces]
[[Serial Interface]]
type = SerialInterface
enabled = yes
port = /dev/ttyUSB0
speed = 115200
databits = 8
parity = NONE
stopbits = 1
```

---

## PipeInterface

**PipeInterface** использует внешнюю программу через stdin/stdout как интерфейс.

### Параметры

| Параметр        | Описание                              |
| --------------- | ------------------------------------- |
| `command`       | Команда для выполнения                |
| `respawn_delay` | Задержка перед перезапуском (секунды) |

### Пример конфигурации

```ini
[interfaces]
[[Pipe Interface]]
type = PipeInterface
enabled = yes
command = netcat -l 5757
respawn_delay = 5
```

---

## KISSInterface

**KISSInterface** для пакетных радиомодемов и TNC, поддерживающих KISS-протокол.

### Параметры

| Параметр                                          | Описание                                         |
| ------------------------------------------------- | ------------------------------------------------ |
| `port`, `speed`, `databits`, `parity`, `stopbits` | Параметры последовательного порта                |
| `preamble`                                        | Преамбула модема (миллисекунды)                  |
| `txtail`                                          | Задержка после передачи (миллисекунды)           |
| `persistence`                                     | Параметр CDMA persistence (0-255)                |
| `slottime`                                        | Длительность слота (миллисекунды)                |
| `id_callsign`                                     | Позывной станции                                 |
| `id_interval`                                     | Интервал идентификации (секунды)                 |
| `flow_control`                                    | Контроль потока (`FLOWCONTROL`, `NOFLOWCONTROL`) |

### Пример конфигурации

```ini
[interfaces]
[[KISS Interface]]
type = KISSInterface
enabled = yes
port = /dev/ttyUSB0
speed = 9600
preamble = 300
txtail = 100
persistence = 63
slottime = 10
id_callsign = CALLSIGN
id_interval = 15
flow_control = FLOWCONTROL
```

---

## AX25KISSInterface

**AX25KISSInterface** — KISS-интерфейс с инкапсуляцией AX.25 для любительского радио.

### Параметры

| Параметр            | Описание                    |
| ------------------- | --------------------------- |
| `callsign`          | Позывной станции (без SSID) |
| `ssid`              | SSID позывного (0-15)       |
| Остальные параметры | Как у KISSInterface         |

### Пример конфигурации

```ini
[interfaces]
[[AX.25 KISS Interface]]
type = AX25KISSInterface
enabled = yes
callsign = CALLSIGN
ssid = 1
port = /dev/ttyUSB0
speed = 9600
```

---

## Обнаруживаемые интерфейсы

Чтобы сделать интерфейс обнаруживаемым другими узлами сети, добавьте следующие параметры:

### Параметры обнаружения

| Параметр                          | Описание                                         | Значение по умолчанию |
| --------------------------------- | ------------------------------------------------ | --------------------- |
| `discoverable`                    | Включить обнаружение (`yes`/`no`)                | `no`                  |
| `discovery_name`                  | Читаемое имя для отображения                     | —                     |
| `announce_interval`               | Интервал между анонсами (минуты)                 | 360                   |
| `reachable_on`                    | Адрес для подключения (IP, hostname, или скрипт) | —                     |
| `discovery_stamp_value`           | Сложность proof-of-work штампа                   | 14                    |
| `discovery_encrypt`               | Шифровать анонсы (`yes`/`no`)                    | `no`                  |
| `publish_ifac`                    | Публиковать IFAC-учётные данные (`yes`/`no`)     | `no`                  |
| `latitude`, `longitude`, `height` | Географические координаты                        | —                     |
| `discovery_frequency`             | Частота для радио-интерфейсов                    | —                     |
| `discovery_bandwidth`             | Полоса пропускания для радио                     | —                     |
| `discovery_modulation`            | Модуляция для радио                              | —                     |

### Пример: Публичный шлюз

```ini
[interfaces]
[[My Public Gateway]]
type = BackboneInterface
mode = gateway
listen_on = 0.0.0.0
port = 4242
discoverable = yes
discovery_name = Region A Public Entrypoint
announce_interval = 720
reachable_on = /usr/local/bin/get_external_ip.sh
discovery_stamp_value = 24
latitude = 51.99714
longitude = -0.74195
```

### Пример: Приватный шлюз

```ini
[interfaces]
[[My Private Gateway]]
type = BackboneInterface
mode = gateway
listen_on = 0.0.0.0
port = 5858
network_name = internal_1
passphrase = Mevpekyafshak5Wr
discoverable = yes
discovery_name = Region A Private Backbone
announce_interval = 720
reachable_on = /usr/local/bin/get_external_ip.sh
discovery_stamp_value = 22
discovery_encrypt = yes
publish_ifac = yes
```

---

## Контроль скорости анонсов

Для предотвращения перегрузки сети можно настроить частоту анонсов:

| Параметр                | Описание                                              | Значение по умолчанию |
| ----------------------- | ----------------------------------------------------- | --------------------- |
| `announce_rate_target`  | Минимальное время между анонсами (секунды)            | —                     |
| `announce_rate_grace`   | Количество нарушений перед применением лимита         | —                     |
| `announce_rate_penalty` | Дополнительное время штрафа после нарушения (секунды) | —                     |

---

## Лимитирование новых destinations

Входящий контроль (ingress control) предотвращает перегрузку от новых интерфейсов:

| Параметр                   | Описание                                                      | Значение по умолчанию |
| -------------------------- | ------------------------------------------------------------- | --------------------- |
| `ingress_control`          | Включить контроль входящих анонсов                            | `True`                |
| `ic_new_time`              | Время, в течение которого интерфейс считается новым (секунды) | 7200                  |
| `ic_burst_freq_new`        | Макс. частота анонсов для новых интерфейсов (анонсов/сек)     | 3.5                   |
| `ic_burst_freq`            | Макс. частота анонсов для остальных интерфейсов               | 12                    |
| `ic_max_held_announces`    | Максимальное количество анонсов в очереди                     | 256                   |
| `ic_burst_hold`            | Время до сброса burst-счётчика (секунды)                      | 60                    |
| `ic_burst_penalty`         | Штраф после сброса burst-счётчика (секунды)                   | 300                   |
| `ic_held_release_interval` | Интервал выпуска анонсов из очереди (секунды)                 | 30                    |

---

## Пользовательские интерфейсы

Reticulum поддерживает создание пользовательских интерфейсов через наследование от базового класса `Interface`. Это позволяет интегрировать любое оборудование или протокол.

### Пример пользовательского интерфейса

```python
from RNS.Interface import Interface

class MyCustomInterface(Interface):
    def __init__(self, owner, config):
        super().__init__(owner, config)
        # Инициализация вашего интерфейса
        self.target = config["target"]

    def process_outgoing(self, packet):
        # Обработка исходящих пакетов
        pass

    def process_incoming(self, data):
        # Обработка входящих данных
        pass
```

---

## Диагностика и отладка

### Проверка конфигурации

Используйте утилиту `rnsd` с флагом `--config` для проверки пути к файлу конфигурации:

```bash
$ rnsd --config
```

### Логирование

Включите подробное логирование для диагностики проблем:

```ini
[reticulum]
loglevel = debug
```

### Статус интерфейсов

Просмотр статуса подключённых интерфейсов:

```bash
$ rnstatus
```

---

## Важные предупреждения

1. **Firewall:** AutoInterface требует UDP-порты **29716** и **42671** для работы обнаружения
2. **Рабочий диапазон:** Радиочастотный спектр регулируется законодательно в вашей стране
3. **KISS framing:** Параметр `kiss_framing` следует использовать только с внешними устройствами (модемами), не с TCPServerInterface
4. **I2P:** Требуется запущенный I2P-роутер (например, `i2pd`)
5. **LXMF:** Для обнаружения интерфейсов требуется модуль `lxmf` (`pip install lxmf`)

---

## См. также

- [**Обнаружение интерфейсов**](discovery.md) — автоматическое обнаружение интерфейсов в сети
- [**Управление Reticulum**](management.md) — полное руководство по конфигурации
- [**Утилита rnodeconf**](tools/rnodeconf.md) — настройка LoRa-трансиверов RNode
- [**Официальная документация**](https://markqvist.github.io/Reticulum/manual/interfaces.html) — оригинальная документация на английском языке
