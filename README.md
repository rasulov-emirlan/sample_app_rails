# Sample app

## This is a Sample app built according to [Ruby on Rails tutorial](https://www.learnenough.com/course/ruby_on_rails_tutorial_7th_edition/frontmatter). If you want you can check it out via [this link](https://hellorailsemirlan.herokuapp.com)😎

- Ruby version
  3.1.2
- System dependencies
  imagemagick
- Configuration
  You will have to add your email and application password for it to your enviorment variables.
  Also dont forget to include a database url to postgres.

  ```
  EMAIL_PSWD=password
  EMAIL_USER=email
  DATABASE_URL=url
  ```

- Database creation
  If this app is connected to the database then just run the wollowing command in the root of the project.

```
rails db:migrate
```
