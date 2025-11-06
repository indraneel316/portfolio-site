import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styles: ['invert  { filter: invert(1) }']
})
export class SkillsComponent {

  frontends = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg', isInvertLogo: false },
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/angular/angular-original.svg', isInvertLogo: false },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nextjs/nextjs-original.svg', isInvertLogo: true },
    { name: 'Redux', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/redux/redux-original.svg', isInvertLogo: false },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg', isInvertLogo: false },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg', isInvertLogo: false },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg', isInvertLogo: false },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg', isInvertLogo: false },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg', isInvertLogo: false }
];

backends = [
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg', isInvertLogo: false },
  { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg', isInvertLogo: false },
  { name: 'Spring Security', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg', isInvertLogo: false },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', isInvertLogo: false },
  { name: 'C', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/c/c-original.svg', isInvertLogo: false },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/cplusplus/cplusplus-original.svg', isInvertLogo: false },
  { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg', isInvertLogo: false },
  { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/graphql/graphql-plain.svg', isInvertLogo: false },
  { name: 'Microservices', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg', isInvertLogo: false },
  { name: 'Kafka', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/apachekafka/apachekafka-original.svg', isInvertLogo: false },
  { name: 'RabbitMQ', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/rabbitmq/rabbitmq-original.svg', isInvertLogo: false }
];

  databases = [
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg', isInvertLogo: false },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg', isInvertLogo: false },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg', isInvertLogo: false },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/redis/redis-original.svg', isInvertLogo: false },
    { name: 'Elasticsearch', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/elasticsearch/elasticsearch-original.svg', isInvertLogo: false },
    { name: 'Cassandra', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/cassandra/cassandra-original.svg', isInvertLogo: false }
  ];

  opss = [
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', isInvertLogo: false },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/azure/azure-original.svg', isInvertLogo: false },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg', isInvertLogo: false },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/kubernetes/kubernetes-plain.svg', isInvertLogo: false },
    { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/terraform/terraform-original.svg', isInvertLogo: false },
    { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/jenkins/jenkins-original.svg', isInvertLogo: false },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg', isInvertLogo: false }
  ];

}
