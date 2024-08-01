gen:
	protoc --proto_path=proto proto/*/*.proto --go_out=./go --go-grpc_out=./go 

init:
	go mod init github.com/jacky-htg/erp-proto

.PHONY: gen init