pipeline{
  agent any
  stages {
    stage('git repo & clean'){
      steps {
        bat "rmdir /s /q EjemploJenkins"
        bat "git clone https://github.com/Drosselmeyer/DAW404---Ejemplo-Semana-12.git"
        bat "mvn clean -f Ejemplo Jenkins"
      }
    }
    stage('install'){
      steps {
        bat "mvn install -f EjemploJenkins"
      }
    }
    stage('test'){
      steps{
        bat "mvn test -f EjemploJenkins"
      }
    }
    stage('package'){
      steps{
        bat "mvn package -f EjemploJenkins"
      }
    }
  }
}