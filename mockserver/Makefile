run:
	docker run -d --rm -p 8080:1080 --platform linux/amd64 -e"MOCKSERVER_INITIALIZATION_JSON_PATH=/config/initializerJson.json" -v "$(PWD)/config:/config" mockserver/mockserver
