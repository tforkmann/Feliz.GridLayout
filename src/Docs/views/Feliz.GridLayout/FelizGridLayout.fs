module Views.FelizGridLayout

open Feliz
open Feliz.Bulma
open Fable.React
open Feliz.GridLayout
open Browser.Dom

let overview =
    Html.div [
        Bulma.title.h1 [
            Html.text "Feliz.GridLayout - Documentation"
            Html.a [
                prop.href "https://www.nuget.org/packages/Feliz.GridLayout/"
                prop.children [
                    Html.img [
                        prop.src "https://img.shields.io/nuget/v/Feliz.GridLayout.svg?style=flat"
                    ]
                ]
            ]
        ]
        Bulma.subtitle.h2 [
            Html.text "Feliz bindings for GridLayout."
        ]
        Html.hr [
          ]
        Shared.fixDocsView "FelizGridLayout" false
    ]

let installation = Shared.installationView "Feliz.GridLayout"
