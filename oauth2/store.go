package oauth2

import (
	"github.com/ory/hydra/jwk"
	"github.com/ory/hydra/pkg"

	idm_hydra "github.com/sugarcrm/multiverse/projects/idm/pkg/hydra"
)

// CommonStore is Hydra specific store that obtains additional information for the application.
type CommonStore struct {
	pkg.FositeStorer
	KeyManager         jwk.Manager
	Issuer             string
	IdpAPIClientHelper *idm_hydra.IdpAPIClientHelper
}
