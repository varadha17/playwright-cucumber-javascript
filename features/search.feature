Feature: search

@search
Scenario: search scenario
Given enter valid username "standard_user"
Given enter valid password "secret_sauce"
Given click login button
Given get products text from SearchPage