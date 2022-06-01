module Router

open Feliz.Router

type Page =
    | FelizGridLayout
    | FelizGridLayoutInstallation
    | FelizGridLayoutExampleGrid

let defaultPage = FelizGridLayout

let parseUrl = function
    | [ "" ] -> FelizGridLayout
    | [ "installation" ] -> FelizGridLayoutInstallation
    | [ "examplegrid" ] -> FelizGridLayoutExampleGrid
    | _ -> defaultPage

let getHref = function
    | FelizGridLayout -> Router.format("")
    | FelizGridLayoutInstallation -> Router.format("installation")
    | FelizGridLayoutExampleGrid -> Router.format("examplegrid")
