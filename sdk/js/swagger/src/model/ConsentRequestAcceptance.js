/**
 * Hydra OAuth2 & OpenID Connect Server
 * Please refer to the user guide for in-depth documentation: https://ory.gitbooks.io/hydra/content/   Hydra offers OAuth 2.0 and OpenID Connect Core 1.0 capabilities as a service. Hydra is different, because it works with any existing authentication infrastructure, not just LDAP or SAML. By implementing a consent app (works with any programming language) you build a bridge between Hydra and your authentication infrastructure. Hydra is able to securely manage JSON Web Keys, and has a sophisticated policy-based access control you can use if you want to. Hydra is suitable for green- (new) and brownfield (existing) projects. If you are not familiar with OAuth 2.0 and are working on a greenfield project, we recommend evaluating if OAuth 2.0 really serves your purpose. Knowledge of OAuth 2.0 is imperative in understanding what Hydra does and how it works.   The official repository is located at https://github.com/ory/hydra   ### Important REST API Documentation Notes  The swagger generator used to create this documentation does currently not support example responses. To see request and response payloads click on **\"Show JSON schema\"**: ![Enable JSON Schema on Apiary](https://storage.googleapis.com/ory.am/hydra/json-schema.png)   The API documentation always refers to the latest tagged version of ORY Hydra. For previous API documentations, please refer to https://github.com/ory/hydra/blob/<tag-id>/docs/api.swagger.yaml - for example:  0.9.13: https://github.com/ory/hydra/blob/v0.9.13/docs/api.swagger.yaml 0.8.1: https://github.com/ory/hydra/blob/v0.8.1/docs/api.swagger.yaml
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'))
  } else {
    // Browser globals (root is window)
    if (!root.HydraOAuth2OpenIdConnectServer) {
      root.HydraOAuth2OpenIdConnectServer = {}
    }
    root.HydraOAuth2OpenIdConnectServer.ConsentRequestAcceptance = factory(
      root.HydraOAuth2OpenIdConnectServer.ApiClient
    )
  }
})(this, function(ApiClient) {
  'use strict'

  /**
   * The ConsentRequestAcceptance model module.
   * @module model/ConsentRequestAcceptance
   * @version Latest
   */

  /**
   * Constructs a new <code>ConsentRequestAcceptance</code>.
   * @alias module:model/ConsentRequestAcceptance
   * @class
   */
  var exports = function() {
    var _this = this
  }

  /**
   * Constructs a <code>ConsentRequestAcceptance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsentRequestAcceptance} obj Optional instance to populate.
   * @return {module:model/ConsentRequestAcceptance} The populated <code>ConsentRequestAcceptance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('accessTokenExtra')) {
        obj['accessTokenExtra'] = ApiClient.convertToType(
          data['accessTokenExtra'],
          { String: Object }
        )
      }
      if (data.hasOwnProperty('authTime')) {
        obj['authTime'] = ApiClient.convertToType(data['authTime'], 'Number')
      }
      if (data.hasOwnProperty('grantScopes')) {
        obj['grantScopes'] = ApiClient.convertToType(data['grantScopes'], [
          'String'
        ])
      }
      if (data.hasOwnProperty('idTokenExtra')) {
        obj['idTokenExtra'] = ApiClient.convertToType(data['idTokenExtra'], {
          String: Object
        })
      }
      if (data.hasOwnProperty('providedAcr')) {
        obj['providedAcr'] = ApiClient.convertToType(
          data['providedAcr'],
          'String'
        )
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String')
      }
    }
    return obj
  }

  /**
   * AccessTokenExtra represents arbitrary data that will be added to the access token and that will be returned on introspection and warden requests.
   * @member {Object.<String, Object>} accessTokenExtra
   */
  exports.prototype['accessTokenExtra'] = undefined
  /**
   * AuthTime is the time when the End-User authentication occurred. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time.
   * @member {Number} authTime
   */
  exports.prototype['authTime'] = undefined
  /**
   * A list of scopes that the user agreed to grant. It should be a subset of requestedScopes from the consent request.
   * @member {Array.<String>} grantScopes
   */
  exports.prototype['grantScopes'] = undefined
  /**
   * IDTokenExtra represents arbitrary data that will be added to the ID token. The ID token will only be issued if the user agrees to it and if the client requested an ID token.
   * @member {Object.<String, Object>} idTokenExtra
   */
  exports.prototype['idTokenExtra'] = undefined
  /**
   * ProvidedAuthenticationContextClassReference specifies an Authentication Context Class Reference value that identifies the Authentication Context Class that the authentication performed satisfied. The value \"0\" indicates the End-User authentication did not meet the requirements of ISO/IEC 29115 [ISO29115] level 1.  In summary ISO/IEC 29115 defines four levels, broadly summarized as follows.  acr=0 does not satisfy Level 1 and could be, for example, authentication using a long-lived browser cookie. Level 1 (acr=1): Minimal confidence in the asserted identity of the entity, but enough confidence that the entity is the same over consecutive authentication events. For example presenting a self-registered username or password. Level 2 (acr=2): There is some confidence in the asserted identity of the entity. For example confirming authentication using a mobile app (\"Something you have\"). Level 3 (acr=3): High confidence in an asserted identity of the entity. For example sending a code to a mobile phone or using Google Authenticator or a fingerprint scanner (\"Something you have and something you know\" / \"Something you are\") Level 4 (acr=4): Very high confidence in an asserted identity of the entity. Requires in-person identification.
   * @member {String} providedAcr
   */
  exports.prototype['providedAcr'] = undefined
  /**
   * Subject represents a unique identifier of the user (or service, or legal entity, ...) that accepted the OAuth2 request.
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined

  return exports
})