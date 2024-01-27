#include <fcntl.h>
#include <unistd.h>
#include <stdio.h>

#define BUF_SIZE 1024

int main()
{
    int fd;
    char buff[BUF_SIZE];
    fd = open("file.txt", O_RDONLY);

    if (fd == -1)
    {
        perror("can't open file");
        return 1;
    }

    int bytes_read = read(fd, buff, BUF_SIZE);

    if (bytes_read == -1)
    {
        perror("can't read file");
        return 1;
    }

    write(1, buff, bytes_read);

    close(fd);

    return 0;
}