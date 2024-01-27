#include <fcntl.h>
#include <unistd.h>
#include <stdio.h>

int main()
{
    int fd;
    char data[] = "Hello world!";
    fd = open("file.txt", O_WRONLY | O_CREAT, 0644);

    if (fd == -1)
    {
        perror("can't open file.");
        return 1;
    }

    int bytes_written = write(fd, data, sizeof(data));

    if (bytes_written == -1)
    {
        perror("can't write to the file.");
        return 1;
    }

    close(fd);

    return 0;
}