module Router

open Feliz.Router

type Page =
    | FelizGridLayout
    | FelizGridLayoutInstallation
    | FelizGridLayoutExampleFlow

let defaultPage = FelizGridLayout

let parseUrl = function
    | [ "" ] -> FelizGridLayout
    | [ "installation" ] -> FelizGridLayoutInstallation
    | [ "examplegrid" ] -> FelizGridLayoutExampleFlow
    | _ -> defaultPage

let getHref = function
    | FelizGridLayout -> Router.format("")
    | FelizGridLayoutInstallation -> Router.format("installation")
    | FelizGridLayoutExampleFlow -> Router.format("examplegrid")
