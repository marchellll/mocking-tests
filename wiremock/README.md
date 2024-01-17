# Wiremock

## How to run

```sh
make run
```

## To smoke test

After run we want to check the server is running and can serve the mock

```sh
make smoke
```

## To benchmark

Simple benchmark using ab

```sh
make benchmark
```

## Test thread hog

```sh
make thread-hog
```


## Result

### Smoke test (without latency)

```
     data_received..................: 102 kB 3.3 kB/s
     data_sent......................: 39 kB  1.3 kB/s
     http_req_blocked...............: avg=40.02µs min=1µs     med=5.87µs   max=2.25ms   p(90)=18.6µs   p(95)=41.92µs
     http_req_connecting............: avg=29.94µs min=0s      med=0s       max=2.1ms    p(90)=0s       p(95)=0s
     http_req_duration..............: avg=33.31ms min=2.86ms  med=19.47ms  max=311.46ms p(90)=46.3ms   p(95)=90.08ms
       { expected_response:true }...: avg=33.31ms min=2.86ms  med=19.47ms  max=311.46ms p(90)=46.3ms   p(95)=90.08ms
     http_req_failed................: 0.00%  ✓ 0        ✗ 293
     http_req_receiving.............: avg=1.08ms  min=22.41µs med=417.33µs max=24.58ms  p(90)=2.68ms   p(95)=4.4ms
     http_req_sending...............: avg=70.23µs min=4.29µs  med=26.7µs   max=2.01ms   p(90)=161.62µs p(95)=292.82µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=32.15ms min=2.7ms   med=19.16ms  max=311.16ms p(90)=44.28ms  p(95)=87.75ms
     http_reqs......................: 293    9.445034/s
     iteration_duration.............: avg=1.03s   min=1s      med=1.02s    max=1.31s    p(90)=1.04s    p(95)=1.09s
     iterations.....................: 293    9.445034/s
     vus............................: 3      min=3      max=10
     vus_max........................: 10     min=10     max=10
```


### Thread hog test (without latency)
Using high 100 VUs

```
    data_received..................: 4.1 MB 34 kB/s
     data_sent......................: 1.6 MB 13 kB/s
     http_req_blocked...............: avg=62.93µs  min=625ns    med=1.7µs   max=197.39ms p(90)=7.62µs   p(95)=14.04µs
     http_req_connecting............: avg=39.84µs  min=0s       med=0s      max=15.94ms  p(90)=0s       p(95)=0s
     http_req_duration..............: avg=11.59ms  min=698.25µs med=5.36ms  max=220.08ms p(90)=27.48ms  p(95)=38.9ms
       { expected_response:true }...: avg=11.59ms  min=698.25µs med=5.36ms  max=220.08ms p(90)=27.48ms  p(95)=38.9ms
     http_req_failed................: 0.00%  ✓ 0        ✗ 11900
     http_req_receiving.............: avg=281.41µs min=6.25µs   med=82.62µs max=56.34ms  p(90)=514.06µs p(95)=982.52µs
     http_req_sending...............: avg=34.08µs  min=2.54µs   med=6.66µs  max=8.52ms   p(90)=41.37µs  p(95)=89.13µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=11.27ms  min=677.79µs med=5.03ms  max=219.86ms p(90)=27.01ms  p(95)=38.3ms
     http_reqs......................: 11900  98.51298/s
     iteration_duration.............: avg=1.01s    min=1s       med=1s      max=1.23s    p(90)=1.02s    p(95)=1.04s
     iterations.....................: 11900  98.51298/s
     vus............................: 100    min=100    max=100
     vus_max........................: 100    min=100    max=100


running (2m00.8s), 000/100 VUs, 11900 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  2m0s

```

### Smoke test (with 5s latency)

```
     data_received..................: 17 kB  574 B/s
     data_sent......................: 6.7 kB 220 B/s
     http_req_blocked...............: avg=1.18ms   min=2.87µs  med=8.2µs   max=8.88ms  p(90)=5.82ms   p(95)=6.43ms
     http_req_connecting............: avg=1.16ms   min=0s      med=0s      max=8.86ms  p(90)=5.8ms    p(95)=6.32ms
     http_req_duration..............: avg=5.04s    min=5.01s   med=5.04s   max=5.06s   p(90)=5.05s    p(95)=5.05s
       { expected_response:true }...: avg=5.04s    min=5.01s   med=5.04s   max=5.06s   p(90)=5.05s    p(95)=5.05s
     http_req_failed................: 0.00%  ✓ 0        ✗ 50
     http_req_receiving.............: avg=1.75ms   min=11.16µs med=1.05ms  max=12.93ms p(90)=3.79ms   p(95)=5.03ms
     http_req_sending...............: avg=240.53µs min=10.83µs med=44.81µs max=4.61ms  p(90)=533.47µs p(95)=587.22µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=5.03s    min=5.01s   med=5.03s   max=5.06s   p(90)=5.05s    p(95)=5.05s
     http_reqs......................: 50     1.652904/s
     iteration_duration.............: avg=6.04s    min=6.01s   med=6.04s   max=6.07s   p(90)=6.05s    p(95)=6.06s
     iterations.....................: 50     1.652904/s
     vus............................: 10     min=10     max=10
     vus_max........................: 10     min=10     max=10


running (0m30.2s), 00/10 VUs, 50 complete and 0 interrupted iterations
default ✓ [ 100% ] 10 VUs  30s
```


### Thread hog test (with 5s latency)

```
data_received..................: 194 kB 1.3 kB/s
     data_sent......................: 75 kB  506 B/s
     http_req_blocked...............: avg=1.71ms   min=1.2µs   med=9.89µs   max=26ms    p(90)=3.92ms   p(95)=17.48ms
     http_req_connecting............: avg=1.64ms   min=0s      med=0s       max=25.88ms p(90)=3.61ms   p(95)=17.26ms
     http_req_duration..............: avg=22.82s   min=5s      med=25.05s   max=35.33s  p(90)=29.23s   p(95)=29.3s
       { expected_response:true }...: avg=22.82s   min=5s      med=25.05s   max=35.33s  p(90)=29.23s   p(95)=29.3s
     http_req_failed................: 0.00%  ✓ 0        ✗ 560
     http_req_receiving.............: avg=2.32ms   min=21.33µs med=632.79µs max=68.7ms  p(90)=5.36ms   p(95)=11.26ms
     http_req_sending...............: avg=242.14µs min=5.87µs  med=65.45µs  max=14.44ms p(90)=581.35µs p(95)=948.09µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=22.82s   min=5s      med=25.05s   max=35.33s  p(90)=29.22s   p(95)=29.29s
     http_reqs......................: 560    3.807122/s
     iteration_duration.............: avg=23.82s   min=6s      med=26.05s   max=36.37s  p(90)=30.23s   p(95)=30.28s
     iterations.....................: 560    3.807122/s
     vus............................: 8      min=8      max=100
     vus_max........................: 100    min=100    max=100


running (2m27.1s), 000/100 VUs, 560 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  2m0s

```

### Thread hog test (with 10s latency)

```
data_received..................: 96 kB  638 B/s
     data_sent......................: 54 kB  356 B/s
     http_req_blocked...............: avg=2.62ms   min=1.45µs med=34.54µs  max=19.05ms p(90)=8.9ms   p(95)=12.43ms
     http_req_connecting............: avg=2.37ms   min=0s     med=0s       max=18.9ms  p(90)=8.59ms  p(95)=11.56ms
     http_req_duration..............: avg=32.12s   min=10s    med=29.93s   max=50.51s  p(90)=49.47s  p(95)=49.64s
       { expected_response:true }...: avg=29.44s   min=10s    med=29.24s   max=50.51s  p(90)=43.97s  p(95)=49.74s
     http_req_failed................: 29.77% ✓ 117      ✗ 276
     http_req_receiving.............: avg=2.32ms   min=0s     med=492.45µs max=71.61ms p(90)=5.3ms   p(95)=10.36ms
     http_req_sending...............: avg=392.72µs min=5.5µs  med=98.37µs  max=10.11ms p(90)=931.4µs p(95)=1.08ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s      p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=32.12s   min=10s    med=29.93s   max=50.51s  p(90)=49.46s  p(95)=49.63s
     http_reqs......................: 393    2.619672/s
     iteration_duration.............: avg=33.12s   min=11s    med=30.93s   max=51.51s  p(90)=50.47s  p(95)=50.64s
     iterations.....................: 393    2.619672/s
     vus............................: 9      min=9      max=100
     vus_max........................: 100    min=100    max=100


running (2m30.0s), 000/100 VUs, 393 complete and 9 interrupted iterations
default ✓ [ 100% ] 100 VUs  2m0s

```

## Verdict

- good performing, even with latency simulation, it handles 100VUs concurrent connection very well with 5s latency.
- With 10s latency, it still handles 100VUs concurrent connection, but with 29% failure rate, which is not good for simulating high latency.
