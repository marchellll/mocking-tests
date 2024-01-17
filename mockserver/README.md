# Mock Server

## How to run

```sh
make run
```

## To smoke test

After run we want to check the server is running and can serve the mock

```sh
cd ../k6
make smoke
```

## To benchmark

Simple benchmark using k6

```sh
cd ../k6
make benchmark
```

## Test thread hog

```sh
cd ../k6
make thread-hog
```


## Result

### Smoke test (without latency)

```
running (0m30.0s), 10/10 VUs, 279 complete and 0 interrupted iterations
default   [ 100% ] 10 VUs  30.0s/30s

     data_received..................: 93 kB 3.0 kB/s
     data_sent......................: 38 kB 1.2 kB/s
     http_req_blocked...............: avg=108.27µs min=1.29µs med=8.2µs   max=6.29ms   p(90)=18.56µs  p(95)=49.04µs
     http_req_connecting............: avg=71.06µs  min=0s     med=0s      max=6.15ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=64.9ms   min=3.79ms med=45.95ms max=931.27ms p(90)=70.53ms  p(95)=292.56ms
       { expected_response:true }...: avg=64.9ms   min=3.79ms med=45.95ms max=931.27ms p(90)=70.53ms  p(95)=292.56ms
     http_req_failed................: 0.00% ✓ 0        ✗ 289
     http_req_receiving.............: avg=41.26µs  min=9.91µs med=30.66µs max=277.25µs p(90)=83.31µs  p(95)=94.63µs
     http_req_sending...............: avg=70.28µs  min=5.37µs med=36.16µs max=1.32ms   p(90)=144.56µs p(95)=218.13µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=64.79ms  min=3.76ms med=45.87ms max=931.16ms p(90)=70.44ms  p(95)=292.31ms
     http_reqs......................: 289   9.358786/s
     iteration_duration.............: avg=1.06s    min=1s     med=1.04s   max=1.93s    p(90)=1.07s    p(95)=1.29s
     iterations.....................: 289   9.358786/s
     vus............................: 10    min=10     max=10
     vus_max........................: 10    min=10     max=10


running (0m30.9s), 00/10 VUs, 289 complete and 0 interrupted iterations
default ✓ [ 100% ] 10 VUs  30s
```


### Thread hog test (without latency)
Using high 100 VUs


```
     data_received..................: 550 kB 3.8 kB/s
     data_sent......................: 255 kB 1.8 kB/s
     http_req_blocked...............: avg=183.24µs min=875ns  med=2.12µs  max=20.21ms p(90)=72µs    p(95)=377.64µs
     http_req_connecting............: avg=176.6µs  min=0s     med=0s      max=20.08ms p(90)=49.72µs p(95)=362.02µs
     http_req_duration..............: avg=6.45s    min=1.45ms med=29.33ms max=1m0s    p(90)=1m0s    p(95)=1m0s
       { expected_response:true }...: avg=219.85ms min=1.45ms med=21.79ms max=2.48s   p(90)=965.4ms p(95)=1.71s
     http_req_failed................: 10.42% ✓ 200       ✗ 1718
     http_req_receiving.............: avg=38.06µs  min=0s     med=23.72µs max=3.23ms  p(90)=71.15µs p(95)=106.66µs
     http_req_sending...............: avg=42.36µs  min=3.33µs med=8.06µs  max=1.2ms   p(90)=39.45µs p(95)=132.11µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=6.45s    min=1.43ms med=29.27ms max=1m0s    p(90)=1m0s    p(95)=1m0s
     http_reqs......................: 1918   13.345321/s
     iteration_duration.............: avg=7.45s    min=1s     med=1.03s   max=1m1s    p(90)=1m1s    p(95)=1m1s
     iterations.....................: 1918   13.345321/s
     vus............................: 63     min=63      max=100
     vus_max........................: 100    min=100     max=100


running (2m23.7s), 000/100 VUs, 1918 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  2m0s
```


### Smoke test (with 5s latency)

```
     data_received..................: 16 kB  526 B/s
     data_sent......................: 6.7 kB 219 B/s
     http_req_blocked...............: avg=601.55µs min=1.04µs  med=5.52µs  max=9.67ms   p(90)=2.3ms    p(95)=2.58ms
     http_req_connecting............: avg=582.01µs min=0s      med=0s      max=9.43ms   p(90)=2.29ms   p(95)=2.55ms
     http_req_duration..............: avg=5.07s    min=5s      med=5.02s   max=5.24s    p(90)=5.23s    p(95)=5.24s
       { expected_response:true }...: avg=5.07s    min=5s      med=5.02s   max=5.24s    p(90)=5.23s    p(95)=5.24s
     http_req_failed................: 0.00%  ✓ 0        ✗ 50
     http_req_receiving.............: avg=66.94µs  min=12.66µs med=43.62µs max=332.37µs p(90)=133.88µs p(95)=161.93µs
     http_req_sending...............: avg=66µs     min=4.25µs  med=20.89µs max=370.25µs p(90)=158.59µs p(95)=304.11µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=5.07s    min=5s      med=5.02s   max=5.24s    p(90)=5.23s    p(95)=5.24s
     http_reqs......................: 50     1.644439/s
     iteration_duration.............: avg=6.07s    min=6s      med=6.02s   max=6.24s    p(90)=6.24s    p(95)=6.24s
     iterations.....................: 50     1.644439/s
     vus............................: 10     min=10     max=10
     vus_max........................: 10     min=10     max=10


running (0m30.4s), 00/10 VUs, 50 complete and 0 interrupted iterations
default ✓ [ 100% ] 10 VUs  30s
```


### Thread hog test (with 5s latency)

```

data_received..................: 640 kB 5.1 kB/s
     data_sent......................: 266 kB 2.1 kB/s
     http_req_blocked...............: avg=423.41µs min=667ns  med=1.91µs  max=20.89ms p(90)=7.71µs  p(95)=113.98µs
     http_req_connecting............: avg=416.57µs min=0s     med=0s      max=20.72ms p(90)=0s      p(95)=38.07µs
     http_req_duration..............: avg=5.24s    min=5s     med=5.13s   max=7.18s   p(90)=5.25s   p(95)=5.37s
       { expected_response:true }...: avg=5.24s    min=5s     med=5.13s   max=7.18s   p(90)=5.25s   p(95)=5.37s
     http_req_failed................: 0.00%  ✓ 0         ✗ 2000
     http_req_receiving.............: avg=28.62µs  min=6.62µs med=20.37µs max=1.78ms  p(90)=41.59µs p(95)=54.95µs
     http_req_sending...............: avg=123.52µs min=2.79µs med=7.45µs  max=5.44ms  p(90)=60.62µs p(95)=258.14µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=5.23s    min=5s     med=5.13s   max=7.18s   p(90)=5.25s   p(95)=5.37s
     http_reqs......................: 2000   16.017616/s
     iteration_duration.............: avg=6.24s    min=6s     med=6.14s   max=8.18s   p(90)=6.25s   p(95)=6.37s
     iterations.....................: 2000   16.017616/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100


running (2m04.9s), 000/100 VUs, 2000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  2m0s

```

### Thread hog test (with 10s latency)

```
     data_received..................: 352 kB 2.8 kB/s
     data_sent......................: 146 kB 1.2 kB/s
     http_req_blocked...............: avg=1.12ms   min=833ns  med=2.18µs max=26.42ms p(90)=21.38µs  p(95)=11.15ms
     http_req_connecting............: avg=1.12ms   min=0s     med=0s     max=26.36ms p(90)=0s       p(95)=11.14ms
     http_req_duration..............: avg=10.32s   min=10s    med=10.14s max=12.36s  p(90)=10.43s   p(95)=12.14s
       { expected_response:true }...: avg=10.32s   min=10s    med=10.14s max=12.36s  p(90)=10.43s   p(95)=12.14s
     http_req_failed................: 0.00%  ✓ 0        ✗ 1100
     http_req_receiving.............: avg=64.68µs  min=7.66µs med=28.7µs max=21.61ms p(90)=67.55µs  p(95)=97.79µs
     http_req_sending...............: avg=142.91µs min=3.04µs med=9.89µs max=10.14ms p(90)=137.13µs p(95)=615.23µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s     max=0s      p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=10.32s   min=10s    med=10.14s max=12.36s  p(90)=10.43s   p(95)=12.14s
     http_reqs......................: 1100   8.822528/s
     iteration_duration.............: avg=11.32s   min=11s    med=11.14s max=13.36s  p(90)=11.43s   p(95)=13.15s
     iterations.....................: 1100   8.822528/s
     vus............................: 100    min=100    max=100
     vus_max........................: 100    min=100    max=100


running (2m04.7s), 000/100 VUs, 1100 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  2m0s

```

## Verdict

- Performance is unpredictable
  - Thread hog test using 0 latency producing 10% error rate
  - But with 5s, and 10s latency, the error rate is 0%? WTF?
  - This performance is reproduced several times
  - looks like GC problem
- Only can using single file to configure the expectation
  - That mean it doesn't fit to be a shared mock server, but maybe enough for a single project
- Have support for open api spec, maybe handy for some project


