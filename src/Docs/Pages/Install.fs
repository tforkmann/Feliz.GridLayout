module Docs.Pages.Install

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

[<ReactComponent>]
let InstallView () =
    React.fragment
        [ Html.divClassed
              "description"
              [ Html.text "Install"
                Html.a
                    [ prop.className "link"
                      prop.href "https://www.nuget.org/packages/Feliz.GridLayout"
                      prop.text "Feliz.GridLayout NuGet" ]
                Html.text "." ]
          Html.divClassed "description" [ Html.text "Using NuGet package command" ]
          Html.divClassed
              "max-w-xl"
              [ Daisy.mockupCode
                    [ Html.pre
                          [ mockupCode.prefix "$"
                            prop.children [ Html.code "Install-Package Feliz.GridLayout" ] ] ] ]
          Html.divClassed "description" [ Html.text "or Paket" ]
          Html.divClassed
              "max-w-xl"
              [ Daisy.mockupCode
                    [ Html.pre
                          [ mockupCode.prefix "$"
                            prop.children [ Html.code "paket add Feliz.GridLayout" ] ] ] ]

          ]