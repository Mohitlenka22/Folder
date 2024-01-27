#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>

int main()
{
    int fd;
    fd = open("file.txt", O_RDONLY);
    if (fd == -1)
    {
        perror("can't read file");
        return 1;
    }
    printf("The file was opened successfully.");
    close(fd);

    return 0;
}