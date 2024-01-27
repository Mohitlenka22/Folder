#include <iostream>
using namespace std;

class Student
{
private:
    static int id;
    // char name[100];
    // string name;

public:
    void setData(void);
    void getData(void);
    void check_id(void);
    static void getId(void);
};

int Student ::id;

void Student ::setData(void)
{
    cout << "Enter id: " << endl;
    cin >> id;
    id++;
    // cout << "Enter Name: " << endl;
    // cin.getline(name, 100);
    // getline(cin, name);
}

void Student ::getData(void)
{
    check_id();
    cout << "The Id: " << id << endl;
}

void Student ::check_id(void)
{
    if (id < 100)
    {
        cout << "Authorized Student." << endl;
    }
}

void Student ::getId(void) // static functions can only can access static data members
{
    cout << id << endl;
}

int main()
{
    Student s1, s2, s3;

    s1.setData();
    s1.getId();

    s2.setData();
    s2.getId();

    s3.setData();
    s3.getId();

    return 0;
}