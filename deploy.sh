#!/bin/bash
DOCKER_USERNAME="jasonstathamdev"
DOCKER_REPO="duchess"
APP_IMAGE="client"

build_and_push() {
    local IMAGE_NAME=$1
    local IMAGE_PATH=$2

    echo -e "\e[32mBuilding Docker image for ${IMAGE_NAME}...\e[0m"
    docker build -t ${DOCKER_USERNAME}/${DOCKER_REPO}:${IMAGE_NAME} ${IMAGE_PATH}
    if [ $? -ne 0 ]; then
        echo "Failed to build the ${IMAGE_NAME} image"
        exit 1
    fi

    echo -e "\e[32mPushing Docker image for ${IMAGE_NAME}...\e[0m"
    docker push ${DOCKER_USERNAME}/${DOCKER_REPO}:${IMAGE_NAME}
    if [ $? -ne 0 ]; then
        echo "Failed to push the ${IMAGE_NAME} image"
        exit 1
    fi
}

build_and_push "${APP_IMAGE}" "client" 

echo -e "\e[32mDocker images built and pushed successfully.\e[0m"
