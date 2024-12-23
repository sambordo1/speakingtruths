Feature: Visit Web Page
  As a user with internet access
  I want to visit the speakingtruths webpage
  So I can see the content

  Scenario: Visit the homepage
    Given I am a visitor
    When I navigate to the homepage
    Then I should see the title "Speakingtruths"