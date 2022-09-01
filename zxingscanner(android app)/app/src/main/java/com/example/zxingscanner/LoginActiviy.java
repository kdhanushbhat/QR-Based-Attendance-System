package com.example.zxingscanner;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class LoginActiviy extends AppCompatActivity {
    EditText et;
    EditText pwd;
    Button b;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login_activiy);
        et = (EditText)findViewById(R.id.emailedit);
        pwd = (EditText)findViewById(R.id.passedit);
        b = findViewById(R.id.button3);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                loginf(view);
            }
        });
    }

    protected void loginf(View v){
        String email = et.getText().toString();
        String pass = pwd.getText().toString();
        Intent i = new Intent(this,MainActivity.class);
        i.putExtra("email",email);
        i.putExtra("pass",pass);
        startActivity(i);
    }
}