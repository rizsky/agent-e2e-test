Feature: Login
  @Login
  Scenario: login as superadmin
    Given user in login page
    When user type valid email
    And user type valid password
    And Press submit
    Then user redirected to agent cms as 'super admin'