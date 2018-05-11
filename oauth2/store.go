package oauth2

import (
	"github.com/ory/hydra/jwk"
	"github.com/ory/hydra/pkg"

	"github.com/sugarcrm/multiverse/projects/golib/grpc"
)

// CommonStore is Hydra specific store that obtains additional information for the application.
type CommonStore struct {
	pkg.FositeStorer
	KeyManager        jwk.Manager
	Issuer            string
	GrpcClientFactory *grpc.ClientFactory
	StsClientId       string
	StsClientSecret   string
}
