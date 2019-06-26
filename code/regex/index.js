const protocal = /((?:https?|f(?:tp|ile))\:)/
const host = /(?!\/\-)(?!\/\_)\/([\w\-]+(?:(?!\.\-)(?!\.\_)\.[\w\-]+){0,2}(?:\.[A-Za-z]+)?)/
const pathname = /((?:(?!\/\-)(?!\/\_)(?:\/[\w\-]+))*\/?)?/
const hash = /((?:\#.+))?/
const search = /((?!\?\-)(?!\?\_)\?[\w\-]+(?!\=\-)(?!\=\_)\=[\w\-]+(?:(?!\&\_)(?!\&\-)\&[\w\-]+(?!\=\-)(?!\=\_)\=[\w\-]+)*)?/
const port = /(?:\:(\d{1,5}))?/
let regex = /^(((?:https?|f(?:tp|ile))\:)\/(?!\/\-)(?!\/\_)\/([\w\-]+(?:(?!\.\-)(?!\.\_)\.[\w\-]+){0,2}(?:\.[A-Za-z]+)?)(?:\:(\d{1,5}))?)((?:(?!\/\-)(?!\/\_)(?:\/[\w\-]+))*\/?)?((?!\?\-)(?!\?\_)\?[\w\-]+(?!\=\-)(?!\=\_)\=[\w\-]+(?:(?!\&\_)(?!\&\-)\&[\w\-]+(?!\=\-)(?!\=\_)\=[\w\-]+)*)?\/?((?:\#.+))?/

export default function getLocation (url) {
  let obj
  url.replace(regex, function (match, origin, protocal, host, port, pathname, search, hash) {
    obj = {
      match,
      origin,
      protocal,
      host,
      port,
      pathname: pathname || '/',
      search,
      hash
    }
  })
  return obj
}
