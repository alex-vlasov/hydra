package oauth2

import (
	"github.com/ory/hydra/jwk"
	"github.com/ory/hydra/pkg"

	iam_client "github.com/sugarcrm/multiverse/projects/idm/pkg/idp/api/client"
)

// CommonStore is Hydra specific store that obtains additional information for the application.
type CommonStore struct {
	pkg.FositeStorer
	KeyManager           jwk.Manager
	Issuer               string
	IamUserClient        *iam_client.UserClient
}
