IMAGE_NAME = saucelabs-img-pw
CONTAINER_NAME = saucelabs-cont-pw

# Default target
.PHONY: help
help:
	@echo "Available targets:"
	@echo "  run             Run Playwright tests in a Docker container."
	@echo "  stop            Stop the running Docker container."
	@echo "  report          Generate the Allure report."
	@echo "  logs          	 Show logs."

# Build the Docker image
.PHONY: build
build:
	docker build -t $(IMAGE_NAME) .

# Run tests in a Docker container
.PHONY: run
run:
	docker run -d --name $(CONTAINER_NAME) -p 3030:3030 $(IMAGE_NAME)

# Stop the running Docker container
.PHONY: stop
stop:
	docker stop $(CONTAINER_NAME)

# Generate the Allure report
.PHONY: report
report:
	docker exec -it $(CONTAINER_NAME) sh -c "npm run allure-report"

# Show logs
.PHONY: logs
logs:
	docker logs -f $(CONTAINER_NAME)