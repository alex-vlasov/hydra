package oauth2

import (
	"github.com/ory/hydra/jwk"
	"github.com/ory/hydra/pkg"

	discovery_client "github.com/sugarcrm/multiverse/projects/discovery/client"
)

// CommonStore is Hydra specific store that obtains additional information for the application.
type CommonStore struct {
	pkg.FositeStorer
	KeyManager           jwk.Manager
	Issuer               string
	DiscoveryClient      *discovery_client.Client
	StsClientCredentials *StsClientCredentials
}
