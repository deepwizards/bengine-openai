# bengine-openai

Welcome to `bengine-openai`, a module designed for seamless integration of OpenAI's GPT API with the bengine platform. This repository offers a robust and efficient way to incorporate advanced AI capabilities into your bengine services.

## Key Features

- **OpenAI GPT API Integration**: Easy integration with OpenAI's GPT API.
- **Cost Calculations**: Automated calculations for tracking API usage and costs.
- **Error Handling with Automatic Retries**: Enhanced reliability with built-in error handling and retry mechanisms.
- **Containerization**: Ready for deployment in a bengine service cluster.
- **Testing Dashboard**: A simple, user-friendly interface to test the API functionalities.

## Getting Started

### Cloning the Repository

To clone the repository, run:

`git clone https://github.com/deepwizards/bengine-openai.git`

### Setup

The module is containerized for easy integration. Follow these steps:

1. **Build the Container**:
   `docker build -t bengine-openai .`

2. **Run the Container**:
   `docker run -d --name bengine-openai bengine-openai`

### Using the Testing Dashboard

Access the testing dashboard to interact with the OpenAI GPT API:

1. Navigate to the dashboard URL.
2. Enter your queries and observe the responses.

## Contribution Guidelines

We follow a structured contribution process:

1. **Feature Branch**:
   `git checkout -b feature/your-feature-name`

2. **Commit Changes**:
   `git commit -am "Add your feature"`

3. **Push to Branch**:
   `git push origin feature/your-feature-name`

4. **Pull Request**:
   Open a PR to the `dev` branch for review.

5. **Review and Approval**:
   Wait for a maintainer's review and approval.

6. **Merge to Main**:
   Approved changes will be merged into the `main` branch.

## Best Practices for Contribution

- Adhere to coding standards and guidelines.
- Ensure proper functionality of the integration in the containerized environment.
- Thoroughly test all new features or changes.
- Update documentation to reflect your contributions.

## Support and Contact

For support or queries, please contact [ben@bengine.ai](mailto:ben@bengine.ai).

Thank you for contributing to `bengine-openai-integration`!
