pipeline {
    agent any
    stages {
       stage('Build') {
          parallel{
              stage('单元测试'){
                 steps {
                    echo 'Build Module1--01 stage ...'
                    }
                }
              stage('Build:Module2') {
                 steps {
                    echo 'Build Module2 stage ...'
                    }
                }
               stage('Build:Module3') {
                  steps {
                    echo 'Build Module3 stage ...'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
