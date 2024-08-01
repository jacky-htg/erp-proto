// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v5.26.1
// source: purchases/purchase_return_service.proto

package purchases

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	PurchaseReturnService_PurchaseReturnCreate_FullMethodName = "/purchases.PurchaseReturnService/PurchaseReturnCreate"
	PurchaseReturnService_PurchaseReturnUpdate_FullMethodName = "/purchases.PurchaseReturnService/PurchaseReturnUpdate"
	PurchaseReturnService_PurchaseReturnView_FullMethodName   = "/purchases.PurchaseReturnService/PurchaseReturnView"
	PurchaseReturnService_PurchaseReturnList_FullMethodName   = "/purchases.PurchaseReturnService/PurchaseReturnList"
)

// PurchaseReturnServiceClient is the client API for PurchaseReturnService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PurchaseReturnServiceClient interface {
	PurchaseReturnCreate(ctx context.Context, in *PurchaseReturn, opts ...grpc.CallOption) (*PurchaseReturn, error)
	PurchaseReturnUpdate(ctx context.Context, in *PurchaseReturn, opts ...grpc.CallOption) (*PurchaseReturn, error)
	PurchaseReturnView(ctx context.Context, in *Id, opts ...grpc.CallOption) (*PurchaseReturn, error)
	PurchaseReturnList(ctx context.Context, in *ListPurchaseReturnRequest, opts ...grpc.CallOption) (PurchaseReturnService_PurchaseReturnListClient, error)
}

type purchaseReturnServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPurchaseReturnServiceClient(cc grpc.ClientConnInterface) PurchaseReturnServiceClient {
	return &purchaseReturnServiceClient{cc}
}

func (c *purchaseReturnServiceClient) PurchaseReturnCreate(ctx context.Context, in *PurchaseReturn, opts ...grpc.CallOption) (*PurchaseReturn, error) {
	out := new(PurchaseReturn)
	err := c.cc.Invoke(ctx, PurchaseReturnService_PurchaseReturnCreate_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *purchaseReturnServiceClient) PurchaseReturnUpdate(ctx context.Context, in *PurchaseReturn, opts ...grpc.CallOption) (*PurchaseReturn, error) {
	out := new(PurchaseReturn)
	err := c.cc.Invoke(ctx, PurchaseReturnService_PurchaseReturnUpdate_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *purchaseReturnServiceClient) PurchaseReturnView(ctx context.Context, in *Id, opts ...grpc.CallOption) (*PurchaseReturn, error) {
	out := new(PurchaseReturn)
	err := c.cc.Invoke(ctx, PurchaseReturnService_PurchaseReturnView_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *purchaseReturnServiceClient) PurchaseReturnList(ctx context.Context, in *ListPurchaseReturnRequest, opts ...grpc.CallOption) (PurchaseReturnService_PurchaseReturnListClient, error) {
	stream, err := c.cc.NewStream(ctx, &PurchaseReturnService_ServiceDesc.Streams[0], PurchaseReturnService_PurchaseReturnList_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &purchaseReturnServicePurchaseReturnListClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type PurchaseReturnService_PurchaseReturnListClient interface {
	Recv() (*ListPurchaseReturnResponse, error)
	grpc.ClientStream
}

type purchaseReturnServicePurchaseReturnListClient struct {
	grpc.ClientStream
}

func (x *purchaseReturnServicePurchaseReturnListClient) Recv() (*ListPurchaseReturnResponse, error) {
	m := new(ListPurchaseReturnResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// PurchaseReturnServiceServer is the server API for PurchaseReturnService service.
// All implementations must embed UnimplementedPurchaseReturnServiceServer
// for forward compatibility
type PurchaseReturnServiceServer interface {
	PurchaseReturnCreate(context.Context, *PurchaseReturn) (*PurchaseReturn, error)
	PurchaseReturnUpdate(context.Context, *PurchaseReturn) (*PurchaseReturn, error)
	PurchaseReturnView(context.Context, *Id) (*PurchaseReturn, error)
	PurchaseReturnList(*ListPurchaseReturnRequest, PurchaseReturnService_PurchaseReturnListServer) error
	mustEmbedUnimplementedPurchaseReturnServiceServer()
}

// UnimplementedPurchaseReturnServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPurchaseReturnServiceServer struct {
}

func (UnimplementedPurchaseReturnServiceServer) PurchaseReturnCreate(context.Context, *PurchaseReturn) (*PurchaseReturn, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PurchaseReturnCreate not implemented")
}
func (UnimplementedPurchaseReturnServiceServer) PurchaseReturnUpdate(context.Context, *PurchaseReturn) (*PurchaseReturn, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PurchaseReturnUpdate not implemented")
}
func (UnimplementedPurchaseReturnServiceServer) PurchaseReturnView(context.Context, *Id) (*PurchaseReturn, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PurchaseReturnView not implemented")
}
func (UnimplementedPurchaseReturnServiceServer) PurchaseReturnList(*ListPurchaseReturnRequest, PurchaseReturnService_PurchaseReturnListServer) error {
	return status.Errorf(codes.Unimplemented, "method PurchaseReturnList not implemented")
}
func (UnimplementedPurchaseReturnServiceServer) mustEmbedUnimplementedPurchaseReturnServiceServer() {}

// UnsafePurchaseReturnServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PurchaseReturnServiceServer will
// result in compilation errors.
type UnsafePurchaseReturnServiceServer interface {
	mustEmbedUnimplementedPurchaseReturnServiceServer()
}

func RegisterPurchaseReturnServiceServer(s grpc.ServiceRegistrar, srv PurchaseReturnServiceServer) {
	s.RegisterService(&PurchaseReturnService_ServiceDesc, srv)
}

func _PurchaseReturnService_PurchaseReturnCreate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PurchaseReturn)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PurchaseReturnServiceServer).PurchaseReturnCreate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PurchaseReturnService_PurchaseReturnCreate_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PurchaseReturnServiceServer).PurchaseReturnCreate(ctx, req.(*PurchaseReturn))
	}
	return interceptor(ctx, in, info, handler)
}

func _PurchaseReturnService_PurchaseReturnUpdate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PurchaseReturn)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PurchaseReturnServiceServer).PurchaseReturnUpdate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PurchaseReturnService_PurchaseReturnUpdate_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PurchaseReturnServiceServer).PurchaseReturnUpdate(ctx, req.(*PurchaseReturn))
	}
	return interceptor(ctx, in, info, handler)
}

func _PurchaseReturnService_PurchaseReturnView_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Id)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PurchaseReturnServiceServer).PurchaseReturnView(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PurchaseReturnService_PurchaseReturnView_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PurchaseReturnServiceServer).PurchaseReturnView(ctx, req.(*Id))
	}
	return interceptor(ctx, in, info, handler)
}

func _PurchaseReturnService_PurchaseReturnList_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ListPurchaseReturnRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(PurchaseReturnServiceServer).PurchaseReturnList(m, &purchaseReturnServicePurchaseReturnListServer{stream})
}

type PurchaseReturnService_PurchaseReturnListServer interface {
	Send(*ListPurchaseReturnResponse) error
	grpc.ServerStream
}

type purchaseReturnServicePurchaseReturnListServer struct {
	grpc.ServerStream
}

func (x *purchaseReturnServicePurchaseReturnListServer) Send(m *ListPurchaseReturnResponse) error {
	return x.ServerStream.SendMsg(m)
}

// PurchaseReturnService_ServiceDesc is the grpc.ServiceDesc for PurchaseReturnService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PurchaseReturnService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "purchases.PurchaseReturnService",
	HandlerType: (*PurchaseReturnServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "PurchaseReturnCreate",
			Handler:    _PurchaseReturnService_PurchaseReturnCreate_Handler,
		},
		{
			MethodName: "PurchaseReturnUpdate",
			Handler:    _PurchaseReturnService_PurchaseReturnUpdate_Handler,
		},
		{
			MethodName: "PurchaseReturnView",
			Handler:    _PurchaseReturnService_PurchaseReturnView_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "PurchaseReturnList",
			Handler:       _PurchaseReturnService_PurchaseReturnList_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "purchases/purchase_return_service.proto",
}
