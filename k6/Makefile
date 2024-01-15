smoke:
	curl -XPOST localhost:8080/mtb/MTBOpenBank/serCurrentBalance

benchmark:
	docker run --network="host" --rm -i grafana/k6 run - <script.js

thread-hog:
	docker run --network="host" --rm -i grafana/k6 run --vus 100 --duration 120s - <script.js