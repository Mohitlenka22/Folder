#include <fcntl.h>
#include <unistd.h>
#include <stdio.h>
#define BUFSIZE 1024
int main()
{
    int fd;
    char buf[BUFSIZE];
    fd = open("file.txt", O_RDONLY);
    if (fd == -1)
    {
        perror("open");
        return 1;
    }
    int bytes_read = read(fd, buf, BUFSIZE);
    if (bytes_read == -1)
    {
        perror("read");
        return 1;
    }
    close(fd);
    write(1, buf, bytes_read);
    return 0;
}
