# Handcoded mock

Testing performance of https://github.com/wagelyapp/mock-mtb

## Result

### Thread hog test (without latency)

```
     data_received..................: 5.2 MB 43 kB/s
     data_sent......................: 1.7 MB 14 kB/s
     http_req_blocked...............: avg=782.28µs min=750ns  med=3.45µs  max=134.88ms p(90)=11.83µs  p(95)=28.33µs
     http_req_connecting............: avg=596.86µs min=0s     med=0s      max=112.32ms p(90)=0s       p(95)=0s
     http_req_duration..............: avg=12.15ms  min=5ms    med=9.6ms   max=77.35ms  p(90)=19.87ms  p(95)=27.21ms
       { expected_response:true }...: avg=12.15ms  min=5ms    med=9.6ms   max=77.35ms  p(90)=19.87ms  p(95)=27.21ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 11900
     http_req_receiving.............: avg=88.87µs  min=7.25µs med=33.93µs max=12.95ms  p(90)=172.09µs p(95)=294.92µs
     http_req_sending...............: avg=164.65µs min=2.95µs med=16.87µs max=15.55ms  p(90)=429µs    p(95)=983.88µs
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=11.89ms  min=4.96ms med=9.31ms  max=77.25ms  p(90)=19.56ms  p(95)=26.79ms
     http_reqs......................: 11900  98.545876/s
     iteration_duration.............: avg=1.01s    min=1s     med=1.01s   max=1.17s    p(90)=1.02s    p(95)=1.02s
     iterations.....................: 11900  98.545876/s
     vus............................: 100    min=100     max=100
     vus_max........................: 100    min=100     max=100


running (2m00.8s), 000/100 VUs, 11900 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  2m0s
```

### Smoke test (with 10s latency)

     data_received..................: 483 kB 4.0 kB/s
     data_sent......................: 154 kB 1.3 kB/s
     http_req_blocked...............: avg=9.62ms   min=1.33µs med=4.33µs  max=148.2ms  p(90)=73.91µs  p(95)=102.61ms
     http_req_connecting............: avg=8.03ms   min=0s     med=0s      max=120.76ms p(90)=0s       p(95)=88.42ms
     http_req_duration..............: avg=10.01s   min=10s    med=10s     max=10.1s    p(90)=10.03s   p(95)=10.05s
       { expected_response:true }...: avg=10.01s   min=10s    med=10s     max=10.1s    p(90)=10.03s   p(95)=10.05s
     http_req_failed................: 0.00%  ✓ 0        ✗ 1100
     http_req_receiving.............: avg=128.27µs min=8.91µs med=54.64µs max=5.31ms   p(90)=271.97µs p(95)=488.59µs
     http_req_sending...............: avg=232.92µs min=5.33µs med=29.58µs max=7.2ms    p(90)=592.98µs p(95)=1.25ms
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=10.01s   min=10s    med=10s     max=10.1s    p(90)=10.03s   p(95)=10.05s
     http_reqs......................: 1100   9.068427/s
     iteration_duration.............: avg=11.02s   min=11s    med=11s     max=11.2s    p(90)=11.04s   p(95)=11.16s
     iterations.....................: 1100   9.068427/s
     vus............................: 100    min=100    max=100
     vus_max........................: 100    min=100    max=100


running (2m01.3s), 000/100 VUs, 1100 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  2m0s

# Verdict

- very predictable performance, can handle 10s latency very well