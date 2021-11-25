#!/bin/bash

 docker run -d \
	-it \
 	--name "api-16" \
	--mount type=bind,source="/home/openwa/042204",target="/home/openwa",bind-propagation=rprivate \
	--mount type=bind,source="/home/venom-api/tokens/api-16",target="/home/openwa/whatsSessions",bind-propagation=rprivate \
	--expose 8000/tcp \
	-P \
	-p 0.0.0.0:4015:8000/tcp \
	--restart=always \
	--memory="1g" \
	--memory-swap="2" \
	--memory-swappiness 100 \
	--env WA_MASTERKEY="ZeDeYveKYsORz8l66y4OGA" \
	--env WA_LICENCEKEY="" \
	openwa/api